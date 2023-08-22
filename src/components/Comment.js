import { addItem, removeItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Comment = (props) => {

    const { commentData, showIndex, setActiveIndex } = props;

    const dispatch = useDispatch();

    expand = () => {
        setActiveIndex();
    }

    add = () => {
        // dispatch an action
        dispatch(addItem(commentData));
    }

    remove = () => {
        // dispatch an action
        dispatch(removeItem(commentData));
    }

    return (
        <div className="w-8/12 mx-auto my-4 bg-gray-300">
            <div onClick={expand} className="p-2 flex justify-between shadow-lg cursor-pointer border-b-2 border-r-2 border-gray-400">
                <span className="font-bold text-lg">{commentData.email}</span>
                <span>🔽</span>
            </div>
            {showIndex && 
                <div className="relative p-2 text-center bg-gray-200">
                    <button className="absolute top-0 right-0 m-1 p-1 bg-green-600 text-white rounded-lg" onClick={add}>Add</button>
                    <button className="absolute bottom-0 right-0 m-1 p-1 bg-red-600 text-white rounded-lg" onClick={remove}>Remove</button>
                    <p>Name - {commentData.name}</p>
                    <p>Body - {commentData.body}</p>
                </div> 
            }
        </div>
    )
}

export default Comment;

