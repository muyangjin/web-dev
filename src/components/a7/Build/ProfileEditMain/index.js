import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {Link} from "react-router-dom";


const ProfileEditMain = () => {
    const profile_data = useSelector((state) => state.profile);

    let [profile, setProfile] = useState(profile_data);
    const dispatch = useDispatch();

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

    const nameChangeHandler = (event) => {
        const newNameText = event.target.value;
        const newProfile = {
            ...profile,
            "firstName": newNameText.split(" ")[0],
            "lastName": newNameText.split(" ")[1]
        };
        setProfile(newProfile);
    }

    const bioChangeHandler = (event) => {
        const newBioText = event.target.value;
        const newProfile = {
            ...profile,
            "bio": newBioText
        };
        setProfile(newProfile);
    }

    const locationChangeHandler = (event) => {
        const newLocationText = event.target.value;
        const newProfile = {
            ...profile,
            "location": newLocationText
        };
        setProfile(newProfile);
    }

    const websiteChangeHandler = (event) => {
        const newWebsiteText = event.target.value;
        const newProfile = {
            ...profile,
            "website": newWebsiteText
        };
        setProfile(newProfile);
    }

    const dateOfBirthChangeHandler = (event) => {
        const newDateOfBirthText = event.target.value;
        console.log(newDateOfBirthText);
        const newProfile = {
            ...profile,
            "dateOfBirth": parse_date(newDateOfBirthText, "to_data_dob")
        };
        setProfile(newProfile);
    }

    const saveClickHandler = () => {
        const action = {
            type: 'save-edited-profile',
            profile
        };
        dispatch(action);
    }


    return(
        <>
            <div className={"row align-items-center ms-2 me-2"}>
                <Link to = "/a7/twitter/profile" className={"col-1 text-center"}>
                    <i className="fa fa-times wd-fg-color-white fa-2x"/>
                </Link>

                <div className={"col-9 wd-font-main wd-fg-color-white wd-font-large mt-2 mb-2"}>
                    Edit Profile
                </div>
                <Link to = "/a7/twitter/profile" className={"col-2 mt-2 mb-2"}>
                    <button className="btn btn-primary rounded-pill wd-float-right
                    wd-save-button" onClick={saveClickHandler}>
                        Save
                    </button>
                </Link>
            </div>

            <div>
                <img className="wd-fill-div img-fluid"
                     src={profile_data.bannerPicture}/>


                <img className="img-fluid rounded-circle wd-profile-picture wd-pos-relative-nudge-up-right p-0"
                     src={profile_data.profilePicture}/>

            </div>

            <div className={"wd-negative-top-margin ms-2 me-2"}>
                <div className={"wd-edit-profile-section mt-2"}>
                    <div className = "wd-font-secondary m-2"> Name </div>

                    <textarea className={"wd-edit-profile-text-area ms-2"}
                              cols="50"
                              rows="1"
                              onChange={nameChangeHandler}>
                        {profile_data.firstName + " " + profile_data.lastName}
                    </textarea>
                </div>

                <div className={"wd-edit-profile-section mt-4"}>
                    <div className = "wd-font-secondary m-2"> Bio </div>

                    <textarea className={"wd-edit-profile-text-area ms-2"}
                              cols="50"
                              rows="10"
                              onChange={bioChangeHandler}>
                        {profile_data.bio}
                    </textarea>

                </div>

                <div className={"wd-edit-profile-section mt-4"}>
                    <div className = "wd-font-secondary m-2"> Location </div>

                    <textarea className={"wd-edit-profile-text-area ms-2"}
                              cols="50"
                              rows="1"
                              onChange={locationChangeHandler}>
                        {profile_data.location}
                    </textarea>

                </div>

                <div className={"wd-edit-profile-section mt-4"}>
                    <div className = "wd-font-secondary m-2"> Website </div>

                    <textarea className={"wd-edit-profile-text-area ms-2"}
                              cols="50"
                              rows="1"
                              onChange={websiteChangeHandler}>
                        {profile_data.website}
                    </textarea>

                </div>

                <div className={"wd-edit-profile-section mt-4"}>
                    <div className = "wd-font-secondary m-2"> Birth Date </div>

                    <input className={"ms-2 mb-2 wd-edit-profile-input"}
                           type="date"
                           defaultValue= {parse_date(profile_data.dateOfBirth, "to_js_dob")}
                           onChange={dateOfBirthChangeHandler}>
                    </input>

                </div>
            </div>

        </>
    )
}

export default ProfileEditMain;