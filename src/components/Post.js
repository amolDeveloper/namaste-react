import { useState } from "react";
import { useParams } from "react-router-dom";
import UsePost from "../utils/UsePost";
import Comment from "./Comment";
import Shimmer from "./Shimmer";

const Post = () => {
    const {userId} = useParams();
    const [activeIndex, setActiveIndex] = useState(null);

    let posts = UsePost(userId);

    return posts === null ? <Shimmer /> : (
        <div>
            <h1 className="font-bold text-center"> Comments  </h1>
            {posts.map((comment, index) => 
                (   
                    <div key={comment.id} data-testid="comments">
                        <Comment    commentData={comment} 
                                    showIndex={activeIndex === index ? true : false}
                                    setActiveIndex={() => setActiveIndex(index)}/>
                    </div>
                )
            )}
        </div>
    )
}

export default Post;