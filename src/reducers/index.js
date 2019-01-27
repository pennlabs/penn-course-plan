const initialLocalStorageData = localStorage.getItem("schedules");
const DEFAULT_SCHEDULE_NAME = "Schedule";

export const generateDefaultSchedule = () => (
    {
        term: "2019A",
        meetings: [],
        colorPalette: [],
        LocAdded: false
    }
);

const initialState = {
    sections: [],
    sectionInfo: undefined,
    schedules: typeof initialLocalStorageData === "undefined" ? {[DEFAULT_SCHEDULE_NAME]: generateDefaultSchedule()} :
        JSON.parse(initialLocalStorageData),
    scheduleSelected: DEFAULT_SCHEDULE_NAME
};