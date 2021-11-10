import React from "react";
import {Link, Route} from "react-router-dom";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import ProfileScreen from "./ProfileScreen";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";

import who_to_follow from "../../../reducer/who_to_follow";
import tweets from "../../../reducer/tweet_list"
import profile from "../../../reducer/profile";
import ProfileEditScreen from "./ProfileEditScreen";

const reducer = combineReducers({tweets, who_to_follow, profile})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/", "/a7/twitter/home", "/a7/twitter"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a7/twitter/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path="/a7/twitter/profile"
                       exact={true} component={ProfileScreen}/>
                <Route path="/a7/twitter/profile-edit"
                       exact={true} component={ProfileEditScreen}/>
            </div>
        </Provider>

    )
};

export default Build;
