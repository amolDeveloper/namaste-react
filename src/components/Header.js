import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";

const Header = () => {
    //local state variable declaration
    const [btnName, setbtnName] = useState('Login');

    // 1) called on after each render
    // useEffect(() => {
    //     console.log('with no dependency array');
    // })

    // 2) called only once after initial render
    // useEffect(() => {
    //     console.log('with empty dependency array');
    // },[])

    // 3) called after every value update
    // useEffect(() => {
    //     console.log('with some value in dependency array');
    // },[btnName]);
    
    return ( 
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="status">Online Status: {UseOnlineStatus() ? '🟢' : '🔴'}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {
                        btnName === 'Login' ? setbtnName('Logout') : setbtnName('Login')
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;