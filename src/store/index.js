import {createStore} from "redux";
import coursePlanApp from "../reducers";

const store = createStore(coursePlanApp, JSON.parse(localStorage.coursePlanState));

store.subscribe(() =>{
    localStorage.coursePlanState = JSON.stringify(store.getState());
});