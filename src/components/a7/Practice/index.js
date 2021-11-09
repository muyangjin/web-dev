import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput"
import Todo from "./Todo";

import ReduxExamples from "./ReduxExamples/components/index.js"

const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <Link to="/a7/build">Build</Link>|
            <Link to="/a7/hello">Hello</Link>|
            <Link to="/a6/build">Goes to A6 Build</Link>

            <ReduxExamples/>


            <Classes/>
            <Styles/>
            <ConditionalOutput/>
            <Todo/>

        </>

    )
};

export default Practice;
