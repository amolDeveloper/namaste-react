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
        <div className="flex m-4 justify-between bg-pink-200 rounded-lg shadow-lg">
            <div className="logo-container">
                <img className="w-40 rounded-lg" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex m-2">
                    <li className="m-2">Online Status: {UseOnlineStatus() ? '🟢' : '🔴'}</li>
                    <li className="m-2"><Link to="/">Home</Link></li>
                    <li className="m-2"><Link to="/about">About Us</Link></li>
                    <li className="m-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="m-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="m-2">Cart</li>
                    <button className="p-2 font-bold rounded-md bg-orange-300 hover:bg-orange-400" onClick={() => {
                        btnName === 'Login' ? setbtnName('Logout') : setbtnName('Login')
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;