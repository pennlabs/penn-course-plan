import React, {Component} from 'react';
import './styles/App.css';
import 'bulma/css/bulma.css'
import Sections from "./components/selector/Sections";
import Schedule from './components/schedule/Schedule'
import {section_info_a, sections_data_a} from "./sections_data";
import Provider from "react-redux/es/components/Provider";
import {createStore} from "redux";
import coursePlanApp from "./reducers";
import {SearchResults} from "./components/search/search_results"
import {SearchBar} from "./components/search/bar"


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
                <SearchBar/>
                <div className="App">
                    <div className="columns" id={"courses_and_sections"}>
                        <div className={"column is-two-fifths"}>
                            <div className={"columns"}>
                                <SearchResults/>
                                <Sections/>
                            </div>
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
