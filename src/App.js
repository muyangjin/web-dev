import logo from './logo.svg';
import './App.css';
import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice/index";
import Build from "./components/a6/Build/index";
import {BrowserRouter, Route} from "react-router-dom";
import ExploreScreen from "./components/a6/Build/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen";

function App() {
    return(
    <BrowserRouter>
        <div className="container">
            <Route path="/a6/hello">
                <HelloWorld />
            </Route>
            <Route path={["/", "/a6", "/a6/practice"]} exact={true}>
                <Practice />
            </Route>
            <Route path="/a6/build">
                <Build />
            </Route>
            <Route path="/a6/twitter/home" component={HomeScreen}/>
            <Route path="/a6/twitter/explore" component={ExploreScreen}/>


        </div>
    </BrowserRouter>
    )
}

export default App;
