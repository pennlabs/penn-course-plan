import {ADD_SCHED_ITEM, CHANGE_SCHEDULE, CREATE_SCHEDULE, REMOVE_SCHED_ITEM} from "../actions";

const DEFAULT_SCHEDULE_NAME = "Schedule";
const initialLocalStorageData = localStorage.getItem("schedules");

const generateDefaultSchedule = () => (
    {
        term: "2019A",
        meetings: [],
        colorPalette: [],
        LocAdded: false
    }
);

const initialState = {
    schedules: typeof initialLocalStorageData === "undefined" ? {[DEFAULT_SCHEDULE_NAME]: generateDefaultSchedule()} :
        JSON.parse(initialLocalStorageData),
    scheduleSelected: DEFAULT_SCHEDULE_NAME
};

export const schedule = (state = initialState, action) => {
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