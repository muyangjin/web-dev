import logo from './logo.svg';
import './App.css';
import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Link, Route} from "react-router-dom";

import HelloWorld_a6 from "./components/a6/HelloWorld";
import Practice_a6 from "./components/a6/Practice/index";
import Build_a6 from "./components/a6/Build/index";
import ExploreScreen_a6 from "./components/a6/Build/ExploreScreen";
import HomeScreen_a6 from "./components/a6/Build/HomeScreen";

import HelloWorld_a7 from "./components/a7/HelloWorld";
import Practice_a7 from "./components/a7/Practice/index";
import Build_a7 from "./components/a7/Build/index";
import ExploreScreen_a7 from "./components/a7/Build/ExploreScreen";
import HomeScreen_a7 from "./components/a7/Build/HomeScreen";
import HomeScreen from "./components/a7/Build/HomeScreen";
import ExploreScreen from "./components/a7/Build/ExploreScreen";

function App() {
    return(
    <BrowserRouter>
        <div className="container">

            <Link to="/a7/practice">To a7 Practice</Link>|
            <Link to="/a7/twitter">To a7 Build</Link>|
            <Link to="/a6/hello">To a6 Hello</Link>|
            <Link to="/a6/practice">To a6 Practice</Link>|
            <Link to="/a6/build">To a6 Build</Link>

            <Route path="/a6/hello" component={HelloWorld_a6}/>
            <Route path={["/a6", "/a6/practice"]} exact={true} component={Practice_a6}/>
            <Route path="/a6/build" component={Build_a6}/>
            <Route path="/a6/twitter/home" component={HomeScreen_a6}/>
            <Route path="/a6/twitter/explore" component={ExploreScreen_a6}/>

            <Route path={["/", "/a7", "/a7/practice"]} exact={true} component={Practice_a7}/>
            <Route path="/a7/twitter" component={Build_a7}/>



        </div>
    </BrowserRouter>
    )
}

export default App;
