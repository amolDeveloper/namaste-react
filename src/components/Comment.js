import { useEffect, useState } from "react";

const Comment = (props) => {

    const { commentData, showIndex, setActiveIndex } = props;

    expand = () => {
        setActiveIndex();
    }

    return (
        <div className="w-8/12 mx-auto my-4 bg-gray-300">
            <div onClick={expand} className="p-2 flex justify-between shadow-lg cursor-pointer border-b-2 border-r-2 border-gray-400">
                <span className="font-bold text-lg">{commentData.email}</span>
                <span>🔽</span>
            </div>
            {showIndex && <div className="p-2 text-center bg-gray-200">
                    <p>Name - {commentData.name}</p>
                    <p>Body - {commentData.body}</p>
                </div> 
            }
        </div>
    )
}

export default Comment;

