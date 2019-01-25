const initialLocalStorageData = localStorage.getItem("schedules");
const initSchedules = (typeof initialLocalStorageData === "undefined" ? [{
    term: "2019A",
    meetings: [],
    colorPalette: [],
    LocAdded: false
}] : JSON.parse(initialLocalStorageData));


const initialState = {
  sections: [],
  sectionInfo: undefined,
  schedules: initSchedules,
  scheduleSelected:0
};