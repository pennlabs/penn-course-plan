import {schedule} from "./schedule";
import {sections} from "./sections";
import {combineReducers} from "redux";
import {modals} from "./modals";

const coursePlanApp = combineReducers({
    schedule,
    sections,
    modals
});

export default coursePlanApp;