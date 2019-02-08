import {ADD_SCHED_ITEM, CHANGE_SCHEDULE, CREATE_SCHEDULE, REMOVE_SCHED_ITEM} from "../actions";

const DEFAULT_SCHEDULE_NAME = "Schedule";

const generateDefaultSchedule = () => (
    {
        term: "2019A",
        meetings: [],
        colorPalette: [],
        LocAdded: false
    }
);

const initialState = {
    schedules: {[DEFAULT_SCHEDULE_NAME]: generateDefaultSchedule()},
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
                    [state.scheduleSelected]: {
                        ...state[state.scheduleSelected],
                        meetings: [...state.schedules[state.scheduleSelected].meetings, action.courseObj]
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