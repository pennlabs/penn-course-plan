import {OPEN_SECTION_INFO, UPDATE_SEARCH} from "../actions";

const initialState = {
    sections: [],
    sectionInfo: undefined,
};

export const sections = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SECTION_INFO:
            return {
                ...state,
                sectionInfo: action.sectionInfo
            };
        case UPDATE_SEARCH:
            return {
                ...state,
                sections: action.sections
            };
        default:
            return {
                ...state,
            };
    }
};