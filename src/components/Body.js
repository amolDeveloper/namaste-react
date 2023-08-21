
import Shimmer from "./Shimmer";
import  UserCard, {withRated} from "./Users";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from '../utils/UseOnlineStatus';
import UserContext from "../utils/UserContext";

const Body = () => {
    //local state variable declaration
    let [listOfUsers, setListOfUsers] = useState([]);
    let [filteredListOfUsers, setfilteredListOfUsers] = useState([]);
    let [searchText, setsearchText] = useState('');
    const { loggedInUser, setUserName } = useContext(UserContext);

    const RatedUserCard = withRated(UserCard);

    useEffect(() => {
        console.log('func use effect');
        fetchData();
        const timer = setInterval(() => {
            // console.log('Body Functional Timer')
        },1000)

        return () => {
            console.log('func will unmount');
            clearInterval(timer)
        }
    },[])

    console.log('func render');

    fetchData = async() => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const response = await data.json();
        setListOfUsers(response);
        setfilteredListOfUsers(response);
    }

    function clickHandler() {
        let filteredUsers = [];
        filteredUsers = listOfUsers.filter((user) => user?.id%2 === 0);
        setfilteredListOfUsers(filteredUsers);
    }

    function searchHandler() {
        let filteredUsers = [];
        filteredUsers = listOfUsers.filter((user) => user?.name?.toLowerCase().includes(searchText.toLowerCase()));
        setfilteredListOfUsers(filteredUsers);
    }

    if (!UseOnlineStatus()) return <h1>Looks like you are Offline!</h1>

    return listOfUsers.length === 0 ? 
            (<h1><Shimmer /></h1>) : 
            (<div className="body">
                <div className="flex justify-center">
                    <div className="flex">
                        <input className="m-1 border-solid border-2 border-black rounded-md" type="text"  value={searchText} onChange={(e) => setsearchText(e.target.value)}/>
                        <button type="button" className="p-1 m-1 hover:text-black  text-white font-bold rounded-md bg-orange-300 hover:bg-orange-400" onClick={(e) => searchHandler()}>Search</button>
                    </div>
                    <button type="button" className="p-1 m-1 hover:text-black font-bold text-white rounded-md bg-gray-300 hover:bg-gray-400" onClick={() => clickHandler()}> Top Rated Users </button>
                    <div>
                        <label className="font-bold">UserName : </label>
                        <input className="p-1 m-1 border-solid border-2 border-black rounded-md" value={loggedInUser} type="text" onChange={(e) => setUserName(e.target.value)}/>
                    </div>
                </div>
                <div className="flex m-4 flex-wrap">
                    {filteredListOfUsers.map(user => 
                        (
                        <Link key={user.id} to={"/users/" + user.id}>
                            { user.id%2 === 0 ? <RatedUserCard userData={user}/> : <UserCard userData={user}/> }
                        </Link>
                        )
                    )}
                </div>
            </div>)
} 

export default Body;