import fetch from 'cross-fetch'

export const UPDATE_SEARCH = "UPDATE_SEARCH";
export const UPDATE_SECTIONS = "UPDATE_SECTIONS";

export const OPEN_SECTION_INFO = "OPEN_SECTION_INFO";
export const CHANGE_SCHEDULE = "CHANGE_SCHEDULE";
export const CREATE_SCHEDULE = "CREATE_SCHEDULE";


export const TOGGLE_SEARCH_FILTER = "TOGGLE_SEARCH_FILTER";
export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";
export const ACTION_BUTTON_PRESSED = "ACTION_BUTTON_PRESSED";

export const ADD_SCHED_ITEM = "ADD_SCHED_ITEM";
export const REMOVE_SCHED_ITEM = "REMOVE_SCHED_ITEM";
export const DELETE_SCHEDULE = "DELETE_SCHEDULE";
export const RENAME_SCHEDULE = "RENAME_SCHEDULE";
export const DUPLICATE_SCHEDULE = "DUPLICATE_SCHEDULE";
export const CLEAR_SCHEDULE = "CLEAR_SCHEDULE";

export const COURSE_SEARCH_ERROR = "COURSE_SEARCH_ERROR";
export const COURSE_SEARCH_LOADING = "COURSE_SEARCH_LOADING";
export const COURSE_SEARCH_SUCCESS = "COURSE_SEARCH_SUCCESS";
export const REQUEST_SEARCH = "REQUEST_SEARCH";

export const duplicateSchedule = scheduleName => (
    {
        type: DUPLICATE_SCHEDULE,
        scheduleName
    }
);

export const deleteSchedule = () => (
    {
        type: DELETE_SCHEDULE,
    }
);

export const renameSchedule = scheduleName => (
    {
        type: RENAME_SCHEDULE,
        scheduleName
    }
);

export const changeSchedule = scheduleId => (
    {
        type: CHANGE_SCHEDULE,
        scheduleId
    }
);

export const addSchedItem = courseObj => (
    {
        type: ADD_SCHED_ITEM,
        courseObj
    }
);

export const removeSchedItem = idDashed => (
    {
        type: REMOVE_SCHED_ITEM,
        idDashed
    }
);

export const updateSearch = searchResults => (
    {
        type: UPDATE_SEARCH,
        searchResults
    }
);

export const updateSections = sections => (
    {
        type: UPDATE_SECTIONS,
        sections
    }
);

export const updateSectionInfo = sectionInfo => (
    {
        type: OPEN_SECTION_INFO,
        sectionInfo
    }
);

export const createSchedule = scheduleName => (
    {
        type: CREATE_SCHEDULE,
        scheduleName
    }
);

export const toggleSearchFilterShown = location => (
    {
        type: TOGGLE_SEARCH_FILTER,
        location
    }
);


export const openModal = modalShown => (
    {
        type: OPEN_MODAL,
        modalShown
    }
);


export const closeModal = () => (
    {
        type: CLOSE_MODAL,
    }
);

export const triggerModalAction = (modalAction) => (
    {
        type: ACTION_BUTTON_PRESSED,
        modalAction
    }
);

export const clearSchedule = () => (
    {
        type: CLEAR_SCHEDULE
    }
);

export function requestSearch(searchData) {
    return {
        type: REQUEST_SEARCH,
        searchData
    }
}


const preprocessSearchData = (searchData) => {
    searchData.param = searchData.param.replace(/\s/, "");
    if (/\d/.test(searchData.param)) {
        searchData.resultType = "numbSearch";
    } else {
        searchData.resultType = "deptSearch";
    }
    return searchData;
};


function buildSearchUrl(searchData) {
    searchData = preprocessSearchData(searchData);
    let url = '/Search?searchType=' + searchData.searchType + "&resultType=" + searchData.resultType + "&searchParam=" + searchData.param;
    console.log(url);
    return url;
}

const processSearchData = (searchData) => searchData.map(item => {
    let qFrac = item.revs.cQ / 4;
    let dFrac = item.revs.cD / 4;
    let iFrac = item.revs.cI / 4;
    item.pcrQShade = Math.pow(qFrac, 3) * 2; // This is the opacity of the PCR block
    item.pcrDShade = Math.pow(dFrac, 3) * 2;
    item.pcrIShade = Math.pow(iFrac, 3) * 2;
    if (qFrac < 0.50) {
        item.pcrQColor = 'black';
    } else {
        item.pcrQColor = 'white';
    } // It's hard to see white text on a light background
    if (dFrac < 0.50) {
        item.pcrDColor = 'black';
    } else {
        item.pcrDColor = 'white';
    }
    if (iFrac < 0.50) {
        item.pcrIColor = 'black';
    } else {
        item.pcrIColor = 'white';
    }
    item.revs.QDratio = item.revs.cQ - item.revs.cD; // This is my way of calculating if a class is "good and easy." R > 1 means good and easy, < 1 means bad and hard

    // Cleanup to keep incomplete data on the bottom;
    if (isNaN(item.revs.QDratio) || !isFinite(item.revs.QDratio)) {
        item.revs.QDratio = 0;
    }
    // the rating as a string - let's us make the actual rating something else and still show the correct number
    item.revs.cQT = item.revs.cQ.toFixed(2);
    if (item.revs.cQ === 0) {
        item.revs.cQT = '';
    }
    item.revs.cDT = item.revs.cD.toFixed(2);
    if (item.revs.cD === 0) {
        item.revs.cDT = '';
        item.revs.QDratio = -100;
        item.revs.cD = 100;
    }
    return item;
});

export function fetchSearch(searchData) {
    return (dispatch) => {
        dispatch(requestSearch(searchData));
        return fetch(buildSearchUrl(searchData)).then(
            response => response.json().then(
                json => dispatch(updateSearch(processSearchData(json))),
                error => dispatch(courseSearchError(response.status))
            ),
            error => dispatch(courseSearchError(error))
        );
    }
}

export function courseSearchError(error) {
    return {
        type: COURSE_SEARCH_ERROR,
        error
    };
}

export function courseSearchLoading() {
    return {
        type: COURSE_SEARCH_LOADING,
    };
}

export function courseSearchSuccess(items) {
    return {
        type: COURSE_SEARCH_SUCCESS,
        items
    };
}