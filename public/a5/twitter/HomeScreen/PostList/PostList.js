import PostListItem from "./PostListItem.js";
import posts_full from "./posts_full.js";

const PostList = () => {
    return(`
        <ul class="ms-0 wd-bg-color-black">
        ${
        posts_full.map(post_full => {
            return(PostListItem(post_full));
        }).join('')
        }
        </ul>
    `);
}
export default PostList;