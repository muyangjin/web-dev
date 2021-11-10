import {useDispatch} from "react-redux";

const kFormatter = (num) => {
    return Math.abs(num) > 999 ?
        Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' :
        Math.sign(num)*Math.abs(num)
}

const TweetListItem = (
    {data =
        {
            "_id": 345,
            "avatar-image": "../../../media/user-icon-md-vs.png",
            "userName": "Vengeful Spirit",
            "handle": "@forTheQueen",
            "time": "5h",
            "verified": false,
            "tweet": "I Love my Queen!!!!!!",
            "link_image": "",
            "link_title": "",
            "link_summary": "",
            "stats": {
                "comments": 338,
                "retweets": 43,
                "likes": 1200
            }
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTweetClickHandler = () => {
        dispatch({type: 'delete-tweet', data})
    };

    const likeClickHandler = () => {
        dispatch({type: 'like-tweet', data});
    };

    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2 col-xxl-1">
                        <img className="rounded-circle wd-post-author-img-dimension"
                             src={data.avatar_image}/>
                    </div>
                    <div className="col-10 col-xxl-11">
                        <span className="wd-font-main">{data.userName}</span>
                        {data.verified ? <i className="fa fa-check-circle"/> : ``}
                        <span className="wd-font-secondary">{data.handle} · {data.time}</span>
                        <a href="javascript:void(0)" onClick={deleteTweetClickHandler}>
                            <i className="fa fa-times fa-pull-right wd-fg-color-white"/>
                        </a>

                        <br/>

                        <span className="wd-fg-color-white"><div dangerouslySetInnerHTML={{__html: data.tweet}} /></span>

                        {data.link_image === '' ? ''
                            :
                        data.link_title === '' ?
                            <div className="wd-rounded-post wd-border-post img-fluid">
                                <img className="wd-rounded-post wd-border-post img-fluid wd-rounded-post-top wd-fill-div"
                                     src={data.link_image}/>
                            </div>
                            :
                            <div className="wd-rounded-post wd-border-post">
                                <img className="img-fluid wd-rounded-post-top wd-fill-div"
                                     src={data.link_image}/>
                    
                                <p className="p-3 wd-border-post-top m-0">
                                    <span className="wd-font-main">
                                        {data.link_title}
                                    </span><br/>
                                    <span className="wd-font-secondary">
                                        {data.link_summary}
                                    </span>
                                </p>
                            </div>}

                        <div className="row mt-3 mb-2">
                            <div className="col-3">
                                <a href="#" className="wd-font-secondary wd-remove-text-decoration">
                                    <i className="fa fa-comment me-2"/> {kFormatter(data.stats.comments)}
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="#" className="wd-font-secondary wd-remove-text-decoration">
                                    <i className="fa fa-retweet me-2"/> {kFormatter(data.stats.retweets)}
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="javascript:void(0)" className="wd-font-secondary wd-remove-text-decoration"
                                   onClick={likeClickHandler}>
                                    {
                                        data.liked && <i className="fas fa-heart me-2" style={{color: data.liked ? "red" : "white"}}/>
                                    }
                                    {
                                        !data.liked && <i className="far fa-heart me-2"/>
                                    }
                                    {kFormatter(data.stats.likes)}
                                </a>
                            </div>

                            <div className="col-3">
                                <a href="#" className="wd-font-secondary wd-remove-text-decoration">
                                    <i className="fa fa-external-link-alt me-2"/>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </li>
        </>
    )
}
export default TweetListItem;