import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const Post = () => {
    const {userId} = useParams();
    const [ posts, setPosts] = useState(null);

    useEffect(() => {
        fetchData();
    },[])

    fetchData = async() => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + userId)
        const response = await data.json();
        setPosts(response);
    }

    return posts === null ? <Shimmer /> : (
        <div className="post-container">
            <h1 className="post-head"> Post </h1>
            <h2> Title: {posts?.title}</h2>
            <p> Body: {posts?.body} </p>
        </div>
    )
}

export default Post;