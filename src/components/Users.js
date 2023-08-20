import { CDN_URL } from "../utils/constants";

export const UserCard = (props) => {
    const { userData } = props;
    return (
        <div className="m-4 p-4 w-60 h-70 bg-gray-200 hover:bg-gray-500 hover:text-white rounded-lg">
            <img className="res-card-logo" src={CDN_URL} />
            <h3 className="font-bold"> {userData.name} </h3>
            <h4> {userData.username} </h4>
            <h4> {userData.email}</h4>
            <h5> {userData.id} stars</h5>
        </div>
    )
}