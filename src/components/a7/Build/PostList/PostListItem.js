const PostListItem = (
    {data =
        {
            "user_icon": "../../../media/user-icon-md-vs.png",
            "userName": "Vengeful Spirit",
            "handle": "@forTheQueen",
            "time": "5h",
            "verified": false,
            "post_text": "I Love my Queen!!!!!!",
            "link_image": "",
            "link_title": "",
            "link_summary": "",
            "comment_count": "338",
            "retweet_count": "43",
            "like_count": "1,2K"
        }
    }
) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-2 col-xxl-1">
                        <img className="rounded-circle wd-post-author-img-dimension"
                             src={data.user_icon}/>
                    </div>
                    <div className="col-10 col-xxl-11">
                        <span className="wd-font-main">{data.userName}</span>
                        {data.verified ? <i className="fa fa-check-circle"/> : ``}
                        <span className="wd-font-secondary">{data.handle} · {data.time}</span><br/>
                        <span className="wd-fg-color-white"><div dangerouslySetInnerHTML={{__html: data.post_text}} /></span>

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
                                    <i className="fa fa-comment me-2"/> {data.comment_count}
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="#" className="wd-font-secondary wd-remove-text-decoration">
                                    <i className="fa fa-retweet me-2"/> {data.retweet_count}
                                </a>
                            </div>
                            <div className="col-3">
                                <a href="#" className="wd-font-secondary wd-remove-text-decoration">
                                    <i className="fa fa-heart me-2"/> {data.like_count}
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
export default PostListItem;