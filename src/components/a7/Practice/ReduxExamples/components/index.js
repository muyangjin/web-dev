import React from "react";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import hello from "../reducers/hello";
import todos from "../reducers/todos";
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
import Todos from "./Todos";

const reducers = combineReducers({hello, todos})
const store = createStore(reducers);


const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <HelloReduxExampleComponent/>
                <Todos/>
            </div>
        </Provider>

    );
};
export default ReduxExamples;
