import React from "react";
import ReactDOM  from "react-dom/client";
import { resList } from "./mockData";

const root = ReactDOM.createRoot(document.getElementById('root'));

const Header = () => {
    return ( 
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsu-C8khhxq3rfL3cUrV1bjL9fc3lBcCtrU0n8xnbYmkI2r_ccOVPhbConC9jrW90nZZs&usqp=CAU" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search-bar">
                <input type="text" name="search" />
                <button type="button"> Search </button>
            </div>
            <div className="res-container">
                {resList.map(restuarant => (<RestuarantCard key={restuarant.name} resData={restuarant}/>))}
            </div>
        </div>
    )
} 

const RestuarantCard = (props) => {
    const { resData } = props;
    return (
        <div className="res-card">
            <img className="res-card-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8YV-PxQIZk2UYkODr6B5bkOwSUGrrVgSnoA&usqp=CAU" />
            <h3> {resData.name} </h3>
            <h4> {resData.cuisine} </h4>
            <h4> {resData.rating_count} </h4>
            <h5> {resData.cost} </h5>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}



root.render(<AppLayout />);

