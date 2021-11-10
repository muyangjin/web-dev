import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ProfileMain from "../ProfileMain";
import PostSummaryList from "../PostSummaryList";

const ProfileScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ProfileMain/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default ProfileScreen;