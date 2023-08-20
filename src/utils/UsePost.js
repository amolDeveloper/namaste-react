import { useState, useEffect } from "react";

const UsePost = (postId) => {
    const [ posts, setPosts] = useState(null);

    useEffect(() => {
        fetchData();
    }, [])

    fetchData = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId);
        const response = await data.json();
        setPosts(response);
    }

    return posts;
}

export default UsePost;