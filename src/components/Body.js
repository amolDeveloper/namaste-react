
import resList from "../utils/mockData";
import { RestuarantCard } from "./Restuarant";
import { useState } from "react";

const Body = () => {

    let [listOfRes, setListOfRes] = useState(resList);

    function clickHandler() {
        let filteredRes = [];
        filteredRes = listOfRes.filter((res) => res?.rating > 4);
        setListOfRes(filteredRes);
    }

    return (
        <div className="body">
            <div className="search-bar">
                <button type="button" onClick={() => clickHandler()}> Top Rated Restuarants </button>
            </div>
            <div className="res-container">
                {listOfRes.map(restuarant => (<RestuarantCard key={restuarant.name} resData={restuarant}/>))}
            </div>
        </div>
    )
} 

export default Body;