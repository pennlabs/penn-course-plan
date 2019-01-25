const getSchedule = (state = {}, scheduleId) => (
    JSON.parse(localStorage.getItem("schedules"))[scheduleId]
);

const createSchedule = (state = {}, scheduleName) => (
  //TODO
    undefined
);