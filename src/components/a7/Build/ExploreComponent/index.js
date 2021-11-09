import PostSummaryList from "../PostSummaryList";
import {Link} from "react-router-dom";

const ExploreComponent = () => {
    return(
        <>
            <div className="wd-remove-border pt-0 pb-0">
                <div className = "row align-items-center">
                    <div className = "col-10 col-lg-11 ">
                        <div className="input-group">
                            <span className="input-group-text wd-rounded-start"><i className="fas fa-search"/></span>
                            <input type="text"
                                   className="form-control wd-rounded-end"
                                   placeholder="Search Twitter"/>
                        </div>
                    </div>
                    <div className = "col-2 col-lg-1 text-center">
                        <Link to="/a6/twitter/explore">
                            <i className="fa fa-cog fa-2x wd-fg-color-twitter-blue"/>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="wd-remove-border p-0 mb-0">
                <ul className="nav nav-tabs mt-2">
                    <li className="nav-item">
                        <Link to="/a6/twitter/explore" className="nav-link active">For you</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/a6/twitter/explore" className="nav-link">Trending</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/a6/twitter/explore" className="nav-link">News</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/a6/twitter/explore" className="nav-link">Sports</Link>
                    </li>
                    <li className="nav-item d-none d-md-block">
                        <Link to="/a6/twitter/explore" className="nav-link">Entertainment</Link>
                    </li>
                </ul>
            </div>

            <div className="list-group-item p-0 mb-2">
                <img src="../../../../media/explore-main-spacex-starship.jpeg" className="img-fluid"/>
                    <p className="wd-img-caption-bottom-left-corner">SpaceX's Starship</p>
            </div>

            <PostSummaryList/>
        </>
    )
}

export default ExploreComponent;