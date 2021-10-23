const PostSummaryListItem = (
    {data =
        {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../../media/explore-post-react-blue.png"
        }
    }
) => {
    return(
        <>
            <li className="list-group-item">
                <div className="row">
                    <div className="col-9 col-md-10">
                        <span className="wd-font-secondary">{data.topic}</span><br/>
                        <span className="font-main">{data.userName}</span>
                        <i className="fa fa-check-circle"/>
                        <span className="wd-font-secondary"> - {data.time}</span><br/>
                    <span className="wd-font-main">
                        {data.title}
                    </span>
                    </div>
                    <div className="col-3 col-md-2">
                        <img src={data.image} className="img-fluid "/>
                    </div>
                </div>
            </li>
        </>
    )
}
export default PostSummaryListItem;