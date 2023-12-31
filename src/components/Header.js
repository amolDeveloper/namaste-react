import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/UseOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    //local state variable declaration
    const [btnName, setbtnName] = useState('Login');

    const { loggedInUser } = useContext(UserContext);

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

    //selector to read cart items
    const cart = useSelector((store) => store.cart.items);
    
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
                    <li className="m-2 font-bold text-lg"><Link to="/cart">Cart</Link>({cart?.length} items) </li>
                    <button className="p-2 font-bold rounded-md bg-orange-300 hover:bg-orange-400" onClick={() => {
                        btnName === 'Login' ? setbtnName('Logout') : setbtnName('Login')
                    }}>{btnName}</button>
                    <li className="m-2 font-bold">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;