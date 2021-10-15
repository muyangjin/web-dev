const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item bg-color-dark-grey">
            <div class="row align-items-center">
                <div class="col-lg-2">
                    <img src = ${who.avatarIcon}
                         class="wd-follow-img-dimension rounded-circle">
                </div>
                <div class="col-lg-6 col-xl-7">
                    <span class="wd-font-main">${who.userName}</span>
                    <i class="fa fa-check-circle"></i><br>
                    <span class="wd-font-secondary">${who.handle}</span>

                </div>
                <div class="col-lg-4 col-xl-3 ">
                    <button class="btn btn-primary rounded-pill">
                        Follow
                    </button>
                </div>
            </div>
                </li>
    `)
}
export default WhoToFollowListItem;