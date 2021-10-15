import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js";

const WhoToFollowList = () => {
    return(`
            <ul class="list-group wd-rounded-15px">
                    <li class="list-group-item wd-bg-color-dark-grey wd-font-follow-title">
                        Who to follow
                    </li>
                    ${
                        who.map(who => {
                            return(WhoToFollowListItem(who));
                        }).join('')
                    }
            </ul>
    `);
}
export default WhoToFollowList;
