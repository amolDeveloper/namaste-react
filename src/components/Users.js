import { CDN_URL } from "../utils/constants";

export const UserCard = (props) => {
    const { userData } = props;
    return (
        <div className="res-card">
            <img className="res-card-logo" src={CDN_URL} />
            <h3> {userData.name} </h3>
            <h4> {userData.username} </h4>
            <h4> {userData.email}</h4>
            <h5> {userData.id} stars</h5>
        </div>
    )
}