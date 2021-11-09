import PostSummaryListItem from "./PostSummaryListItem";
import post_summary_data from "./post_summary_data.json"

const PostSummaryList = () => {
    return(
        <>
            <ul className="list-group mt-2 rounded-3">
                <li className={"list-group-item wd-font-follow-title"}> What's Happening</li>
                {
                    post_summary_data.map(data => {
                        return(<PostSummaryListItem data = {data}/>);
                    })
                }
            </ul>
        </>
    )
}

export default PostSummaryList;