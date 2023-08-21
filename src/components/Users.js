import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";
import { useContext } from "react";

const UserCard = (props) => {
    const { userData } = props;
    const { loggedInUser } = useContext(UserContext);
    return (
        <div className="m-4 p-4 w-60 h-70 bg-gray-200 hover:bg-gray-500 hover:text-white rounded-lg">
            <img className="res-card-logo" src={CDN_URL} />
            <h3 className="font-bold"> {userData.name} </h3>
            <h4> {userData.username} </h4>
            <h4> {userData.email}</h4>
            <h5> {userData.id} stars</h5>
            <h6> {loggedInUser} </h6>
        </div>
    )
}

export const withRated = (UserCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute m-1 p-1 bg-yellow-600 text-white rounded-lg">Top Rated</label>
                <UserCard {...props} />
            </div>
        )
    }
}

export default UserCard;