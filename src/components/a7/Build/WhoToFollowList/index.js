import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who_to_follow_data = useSelector((state) => state.who_to_follow);
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