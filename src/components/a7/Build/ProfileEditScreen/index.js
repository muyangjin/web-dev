import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import PostSummaryList from "../PostSummaryList";
import ProfileEditMain from "../ProfileEditMain";

const ProfileEditScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-2 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ProfileEditMain/>
            </div>
            <div className="d-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList/>
            </div>
        </div>
    );
};
export default ProfileEditScreen;