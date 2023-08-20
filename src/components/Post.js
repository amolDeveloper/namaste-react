import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UsePost from "../utils/UsePost";

const Post = () => {
    const {userId} = useParams();

    let posts = UsePost(userId);

    return posts === null ? <Shimmer /> : (
        <div className="post-container">
            <h1 className="post-head"> Post </h1>
            <h2> Title: {posts?.title}</h2>
            <p> Body: {posts?.body} </p>
        </div>
    )
}

export default Post;