import PostListItem from "./PostListItem";
import post_data from "./post_data.json"

const PostList = () => {
    return(
        <>
            <ul>
                {
                    post_data.map(data => {
                        return(<PostListItem data = {data}/>);
                    })
                }
            </ul>
        </>
    )
}

export default PostList;