import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput"
import Todo from "./Todo";

const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a6/build">Build</Link>|
            <Link to="/a6/hello">Hello</Link>

            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <Todo/>

        </>

    )
};

export default Practice;
