import React from "react";
import {Link, Route} from "react-router-dom";

import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

import who_to_follow from "../../../reducer/who_to_follow";
import HomeScreen from "./HomeScreen";
import ExploreScreen from "./ExploreScreen";
import tweets from "../../../reducer/tweet_list"

const reducer = combineReducers({tweets: tweets, who_to_follow})
const store = createStore(reducer);

const Build = () => {
    return(
        <Provider store={store}>
            <div>
                <Route path={["/", "/a7/twitter/home", "/a7/twitter"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a7/twitter/explore"
                       exact={true} component={ExploreScreen}/>
            </div>
        </Provider>

    )
};

export default Build;
