import {ADD_SCHED_ITEM, CHANGE_SCHEDULE, CREATE_SCHEDULE, DELETE_SCHEDULE, REMOVE_SCHED_ITEM} from "../actions";

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

const removeSchedule = (scheduleKey, initialSchedule) => {
    const newSchedules = {};
    Object.keys(initialSchedule).filter(schedName => schedName !== scheduleKey).forEach(schedName => newSchedules[schedName] = initialSchedule[schedName]);
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
                },
                scheduleSelected: action.scheduleName
            };
        case DELETE_SCHEDULE:
            return {
                ...state,
                schedules: removeSchedule(action.scheduleName ? action.scheduleName : state.scheduleSelected, state.schedules),
                scheduleSelected: Object.keys(state.schedules)[0]
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
                    [state.scheduleSelected]: {
                        ...state[state.scheduleSelected],
                        meetings: state.schedules[state.scheduleSelected].meetings.filter(m => m.fullID !== action.idDashed)
                    }
                }
            };
        default:
            return {
                ...state,
            }
    }
};