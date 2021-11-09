import PostListItem from "./PostListItem";
import post_data from "./post_data.json"

const PostList = () => {
    return(
        <>
            <ul className="list-group mt-2 rounded-3">
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