import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    clear = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="m-2 p-2 text-center font-bold  bg-black text-white rounded-lg" onClick={clear}> Clear Cart</button>
            <div className="p-2 text-center bg-gray-200">
                {cartItems.length === 0 ? <h1>No Items in Cart</h1>: cartItems.map((item) => 
                    (   
                        <h1 key={item.id}>{item.email}</h1>
                    )
                )}
            </div> 
        </div>
    )
}

export default Cart;