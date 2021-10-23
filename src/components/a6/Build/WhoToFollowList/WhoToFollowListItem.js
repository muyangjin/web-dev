const WhoToFollowListItem = (
    {data =
        {
        "avatarIcon": "../../../../media/user-icon-md-java.png",
        "userName": "Java",
        "handle": "Java"
        }
    }
) => {
    return(
        <>
            <li className="list-group-item bg-color-dark-grey">
                <div className="row align-items-center">
                    <div className="col-lg-2">
                        <img src={data.avatarIcon} className="wd-follow-img-dimension rounded-circle"/>
                    </div>

                    <div className="col-lg-6 col-xl-7">
                        <span className="wd-font-main">{data.userName}</span>
                        <i className="fa fa-check-circle"/><br/>
                        <span className="wd-font-secondary">{data.handle}</span>
                    </div>
                    <div className="col-lg-4 col-xl-3 ">
                        <button className="btn btn-primary rounded-pill">
                            Follow
                        </button>
                    </div>
                </div>
            </li>
        </>
    )
}
export default WhoToFollowListItem;