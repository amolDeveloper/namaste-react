import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UsePost from "../utils/UsePost";

const Post = () => {
    const {userId} = useParams();

    let posts = UsePost(userId);

    return posts === null ? <Shimmer /> : (
        <div className="m-4 p-4 bg-gray-300 rounded-lg shadow-lg">
            <h1 className="font-bold"> Post </h1>
            <h2> Title: {posts?.title}</h2>
            <p> Body: {posts?.body} </p>
        </div>
    )
}

export default Post;