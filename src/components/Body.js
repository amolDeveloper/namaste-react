
import Shimmer from "./Shimmer";
import { UserCard } from "./Users";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
    //local state variable declaration
    let [listOfUsers, setListOfUsers] = useState([]);
    let [filteredListOfUsers, setfilteredListOfUsers] = useState([]);
    let [searchText, setsearchText] = useState('');

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
        filteredUsers = listOfUsers.filter((user) => user?.id > 5);
        setfilteredListOfUsers(filteredUsers);
    }

    function searchHandler() {
        let filteredUsers = [];
        filteredUsers = listOfUsers.filter((user) => user?.name?.toLowerCase().includes(searchText.toLowerCase()));
        setfilteredListOfUsers(filteredUsers);
    }

    return listOfUsers.length === 0 ? 
            (<h1><Shimmer /></h1>) : 
            (<div className="body">
                <div className="actions">
                    <div className="search">
                        <input type="text"  value={searchText} onChange={(e) => setsearchText(e.target.value)}/>
                        <button type="button" onClick={(e) => searchHandler()}>Search</button>
                    </div>
                    <button type="button" onClick={() => clickHandler()}> Top Rated Users </button>
                </div>
                <div className="res-container">
                    {filteredListOfUsers.map(user => 
                        (
                        <Link key={user.id} to={"/users/" + user.id}>
                            <UserCard userData={user}/>
                        </Link>
                        )
                    )}
                </div>
            </div>)
} 

export default Body;