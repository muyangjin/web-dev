import React from "react";
import {Link, Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen";

const Build = () => {
    return(
        <>
            <h1>Build</h1>
            <Link to="/a6/practice">Practice</Link>|
            <Link to="/a6/hello">Hello</Link>
            {/*<Route path="/a6/twitter/home" component={HomeScreen}/>*/}
            {/*<Route path="/a6/twitter/explore" component={ExploreScreen}/>*/}

            <ExploreScreen/>
        </>
    )
};

export default Build;
