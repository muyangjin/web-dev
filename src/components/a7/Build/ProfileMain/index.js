import {useSelector} from "react-redux";
import React from "react";
import {Link} from "react-router-dom";


const ProfileMain = () => {
    const profile_data = useSelector((state) => state.profile);
    let monthMap = {
        '01': "January",
        '1': "January",
        '02': "February",
        '2': "February",
        '03': "March",
        '3': "March",
        '04': "April",
        '4': "April",
        '05': "May",
        '5': "May",
        '06': "June",
        '6': "June",
        '07': "July",
        '7': "July",
        '08': "August",
        '8': "August",
        '09': "September",
        '9': "September",
        '10': "October",
        '11': "November",
        '12': "December"
    };

    const parse_date = (dobString, format) => {
        if(format === "present_dob") {
            let month = dobString.split("/")[0]
            let year = dobString.split("/")[2]
            let date = dobString.split("/")[1]
            return monthMap[month] + " " + date + ", " + year;
        } else if (format === "present_joined") {
            let month = dobString.split("/")[0]
            let year = dobString.split("/")[1]
            return monthMap[month] + " " + year;
        } else if (format === "to_js_dob") {
            let month = dobString.split("/")[0]
            if (month.length === 1) {
                month = "0" + month;
            }
            let year = dobString.split("/")[2]
            let date = dobString.split("/")[1]
            if (date.length === 1) {
                date = "0" + date;
            }
            return year + "-" + month + "-" + date;
        } else if (format === "to_data_dob") {
            let month = dobString.split("-")[1]
            let year = dobString.split("-")[0]
            let date = dobString.split("-")[2]
            return month + "/" + date + "/" + year;
        }
    }

    return(
        <>
            <div className={"row align-items-center ms-2"}>
                <a href="#" className={"col-1 text-center"}>
                    <i className="fa fa-arrow-left wd-fg-color-white"/>
                </a>

                <div className={"col-11"}>
                    {/*<a HREF = {profile_data.website} className={"wd-font-main wd-fg-color-white wd-font-large"}>*/}
                    {/*    {profile_data.firstName} {profile_data.lastName}*/}
                    {/*</a>*/}

                    <span className={"wd-font-main wd-fg-color-white wd-font-large"}>
                        {profile_data.firstName} {profile_data.lastName}
                    </span>

                    <br/>
                    <span className={"wd-font-secondary"}>{profile_data.tweetCount} Tweets</span>
                </div>
            </div>


            <div>
                <img className="wd-fill-div img-fluid"
                     src={profile_data.bannerPicture}/>


                <img className="img-fluid rounded-circle wd-profile-picture wd-pos-relative-nudge-up-right p-0"
                     src={profile_data.profilePicture}/>


                <Link to = "/a7/twitter/profile-edit">
                    <button className="btn btn-primary rounded-pill wd-float-right mt-2 wd-edit-file-button">
                        Edit Profile
                    </button>
                </Link>

            </div>

            <div className={"wd-negative-top-margin ms-2"}>
                <div>
                    <span className={"wd-font-main wd-fg-color-white wd-font-large"}>{profile_data.firstName} {profile_data.lastName}</span>
                    <br/>
                    <span className={"wd-font-secondary"}> @{profile_data.handle}</span>
                    <br/>
                    <div className={"wd-fg-color-white pt-2"}> {profile_data.bio}</div>
                </div>

                <div className={"mt-2"}>
                    <i className="fa fa-map-marker-alt wd-font-secondary"/>
                    <span className={"wd-font-secondary"}> {profile_data.location}</span>
                    <i className="fa fa-baby-carriage wd-font-secondary ms-3"/>
                    <span className={"wd-font-secondary"}> Born {parse_date(profile_data.dateOfBirth, "present_dob")}</span>
                    <i className="fa fa-calendar wd-font-secondary ms-3"/>
                    <span className={"wd-font-secondary"}> Joined {parse_date(profile_data.dateJoined, "present_joined")}</span>
                </div>

                <div className={"mt-2"}>
                    <span className={"wd-font-main wd-fg-color-white"}> {profile_data.followingCount}</span>
                    <span className={"wd-font-secondary"}> Following</span>
                    <span className={"ms-2 wd-font-main wd-fg-color-white"}> {profile_data.followersCount}</span>
                    <span className={"wd-font-secondary"}> Followers</span>
                </div>
            </div>
        </>
    )
}

export default ProfileMain;