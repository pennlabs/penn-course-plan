import React, {Component} from 'react';
import './styles/App.css';
import 'bulma/css/bulma.css'
import Sections from "./components/selector/Sections";
import Schedule from './components/schedule/Schedule'
import {section_info_a, sections_data_a} from "./sections_data";
import Provider from "react-redux/es/components/Provider";
import {createStore} from "redux";
import coursePlanApp from "./reducers";

const previousState = localStorage.getItem("coursePlanState");
const store = createStore(coursePlanApp, previousState ? JSON.parse(previousState) : undefined);

store.subscribe(() =>{
    localStorage.setItem("coursePlanState", JSON.stringify(store.getState()));
});

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store = {store}>
                <div className="App">
                    <div className="columns">
                        <div className="column is-one-fifth">
                        </div>
                        <div className="column is-one-fifth">
                            <Sections/>
                        </div>
                        <div id="InfoPanel" className="column">
                            <Schedule/>
                        </div>
                    </div>
                </div>
            </Provider>
        );
    }
}

export default App;
