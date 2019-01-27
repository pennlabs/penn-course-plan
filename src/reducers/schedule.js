import {generateDefaultSchedule} from "./index";
import {ADD_SCHED_ITEM, CHANGE_SCHEDULE, CREATE_SCHEDULE, REMOVE_SCHED_ITEM} from "../actions";

const scheduleChange = (state = {}, action) => {
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
        default:
            return {
                ...state,
            }
    }
};

const addRemoveScheduleItem = (state, action) => {
    const {type, meeting} = action;
    const activeSchedule = state.scheduleSelected;
    switch (type) {
        case ADD_SCHED_ITEM:
            return {
                ...state,
                schedules: {
                    ...state.schedules,
                    [activeSchedule]: {
                        ...state[activeSchedule],
                        meetings: [...state.meetings, meeting]
                    }
                }
            };
        case REMOVE_SCHED_ITEM:
            return {
                ...state,
                schedules: {
                    ...state.schedules,
                    [activeSchedule]: {
                        ...state[activeSchedule],
                        meetings: state.meetings.filter(m => m.idDashed !== meeting.idDashed)
                    }
                }
            };
        default:
            return state
    }
};