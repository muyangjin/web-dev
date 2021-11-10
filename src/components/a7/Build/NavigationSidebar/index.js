import React from "react";
import "../index.css"
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = "explore"
    }
    ) => {

    return (
        <>
            <ul className="list-group">
                <Link to="/a7/"
                      className={`list-group-item list-group-item-action wd-remove-border`}>
                    <i className="fab fa-twitter"/>
                </Link>


                <Link to = "/a7/twitter/home"
                      id="navbar-home"
                      className={`list-group-item list-group-item-action ${active === 'home'? 'active' : ''} wd-remove-border`}>
                    <div className="row">
                        <div className="col-12 col-xl-2">
                            <i className="fa fa-home"/>
                        </div>
                        <div className="d-none d-xl-inline col-xl-10">
                            Home
                        </div>
                    </div>
                </Link>

                <Link to = "/a7/twitter/explore"
                      id="navbar-explore"
                      className={`list-group-item list-group-item-action ${active === 'explore'? 'active' : ''} wd-remove-border`}>
                    <div className="row">
                        <div className="col-12 col-xl-2">
                            <i className="fa fa-hashtag"/>
                        </div>
                        <div className="d-none d-xl-inline col-xl-10">
                            Explore
                        </div>
                    </div>
                </Link>

                <Link to = "/"
                      id="navbar-notifications"
                      className={`list-group-item list-group-item-action ${active === 'notifications'? 'active' : ''} wd-remove-border`}>
                    <div className="row">
                        <div className="col-12 col-xl-2">
                            <i className="fa fa-bell"/>
                        </div>
                        <div className="d-none d-xl-inline col-xl-10">
                            Notifications
                        </div>
                    </div>
                </Link>

                <Link to = "/"
                      id="navbar-messages"
                      className={`list-group-item list-group-item-action ${active === 'messages'? 'active' : ''} wd-remove-border`}>
                    <div className="row">
                        <div className="col-12 col-xl-2">
                            <i className="fa fa-envelope"/>
                        </div>
                        <div className="d-none d-xl-inline col-xl-10">
                            Messages
                        </div>
                    </div>
                </Link>

                <Link to = "/"
                      id="navbar-bookmarks"
                      className={`list-group-item list-group-item-action ${active === 'bookmarks'? 'active' : ''} wd-remove-border`}>
                    <div className="row">
                        <div className="col-12 col-xl-2">
                            <i className="fa fa-bookmark"/>
                        </div>
                        <div className="d-none d-xl-inline col-xl-10">
                            Bookmarks
                        </div>
                    </div>
                </Link>

                <Link to = "/"
                      id="navbar-lists"
                      className={`list-group-item list-group-item-action ${active === 'lists'? 'active' : ''} wd-remove-border`}>
                    <div className="row">
                        <div className="col-12 col-xl-2">
                            <i className="fa fa-list"/>
                        </div>
                        <div className="d-none d-xl-inline col-xl-10">
                            Lists
                        </div>
                    </div>
                </Link>

                <Link to = "/a7/twitter/profile"
                      id="navbar-profile"
                      className={`list-group-item list-group-item-action ${active === 'profile'? 'active' : ''} wd-remove-border`}>
                    <div className="row">
                        <div className="col-12 col-xl-2">
                            <i className="fa fa-user"/>
                        </div>
                        <div className="d-none d-xl-inline col-xl-10">
                            Profile
                        </div>
                    </div>
                </Link>

                <Link to = "/"
                      id="navbar-more"
                      className={`list-group-item list-group-item-action ${active === 'more'? 'active' : ''} wd-remove-border`}>
                    <div className="row">
                        <div className="col-12 col-xl-2">
                            <i className="fa fa-ellipsis-h"/>
                        </div>
                        <div className="d-none d-xl-inline col-xl-10">
                            More
                        </div>
                    </div>
                </Link>
            </ul>

            <div className="d-grid ">
                <button className="btn btn-primary mt-2 rounded-pill wd-bg-color-twitter-blue">
                    Tweet
                </button>
            </div>
        </>
    )
}

export default NavigationSidebar;