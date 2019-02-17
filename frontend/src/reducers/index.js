import {schedule} from "./schedule";
import {sections} from "./sections";
import {combineReducers} from "redux";

const coursePlanApp = combineReducers({
    schedule,
    sections
});

export default coursePlanApp;