import {generateDefaultSchedule} from "./index";
import {ADD_SCHED_ITEM, CHANGE_SCHEDULE, CREATE_SCHEDULE, REMOVE_SCHED_ITEM} from "../actions";

const schedule = (state = {}, action) => {
    switch (action.type) {
        case CREATE_SCHEDULE:
            return {
                ...state,
                schedules: {
                    ...
                        state.schedules,
                    [action.scheduleName]: generateDefaultSchedule(),
                }
            };
        case CHANGE_SCHEDULE:
            return {
                ...state,
                scheduleSelected: action.scheduleId
            };
        case ADD_SCHED_ITEM:
            return {
                ...state,
                schedules: {
                    ...state.schedules,
                    [state.scheduleId]: {
                        ...state[state.scheduleId],
                        meetings: [...state.meetings, action.courseObj]
                    }
                }
            };
        case REMOVE_SCHED_ITEM:
            return {
                ...state,
                schedules: {
                    ...state.schedules,
                    [state.scheduleId]: {
                        ...state[state.scheduleId],
                        meetings: state.meetings.filter(m => m.idDashed !== action.courseObj.idDashed)
                    }
                }
            };
        default:
            return {
                ...state,
            }
    }
};