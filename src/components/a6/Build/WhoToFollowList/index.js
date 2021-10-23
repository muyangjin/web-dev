import WhoToFollowListItem from "./WhoToFollowListItem";
import who_to_follow_data from "./who_to_follow_data.json"

const WhoToFollowList = () => {
    return(
        <>
            <ul>
                {
                    who_to_follow_data.map(data => {
                        return(<WhoToFollowListItem data = {data}/>);
                    })
                }
            </ul>
        </>
    )
}

export default WhoToFollowList;