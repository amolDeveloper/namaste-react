import { CDN_URL } from "../utils/constants";

export const RestuarantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card">
            <img className="res-card-logo" src={CDN_URL} />
            <h3> {resData.name} </h3>
            <h4> {resData.cuisine} </h4>
            <h4> {resData.rating} stars</h4>
            <h5> {resData.cost} </h5>
        </div>
    )
}