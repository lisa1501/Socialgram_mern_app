import { useSelector } from "react-redux";
import PostWidget from "./PostWidget";
const PostsWidget = () => {

    const posts = useSelector((state) => state.posts);

    return (
        <>
            {posts.map(() => (<PostWidget />))}
        </>
    );
};

export default PostsWidget;