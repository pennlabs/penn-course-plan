import {OPEN_SECTION_INFO, UPDATE_SEARCH, UPDATE_SECTIONS} from "../actions";
import {sections_data_a} from "../sections_data";

const initialState = {
    sections: sections_data_a,
    searchResults: [],
    sectionInfo: undefined,
};

export const sections = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SECTION_INFO:
            return {
                ...state,
                sectionInfo: action.sectionInfo
            };
        case UPDATE_SECTIONS:
            return {
                ...state,
                sections: action.sections
            };
        case UPDATE_SEARCH:
            return {
                ...state,
                searchResults: action.searchResults,
                sections: undefined
            };
        default:
            return {
                ...state,
            };
    }
};

//FIXME: Old code for getting section info
/*
PCS.factory('UpdateSectionInfo', ['httpService', function(httpService){
    var retObj = {};
    retObj.getSectionInfo = function(section) {
        ga('send', 'event', 'Search', 'sectSearch', section);
        return httpService.get('/Search?searchType=courseIDSearch&resultType=sectSearch&searchParam='+section).then(function(data) {
            return data;
        }, function(err) {
            if (!err.config.timeout.$$state.value) {
                ErrorAlert(err); //  If there's an error, show an error dialog
            } else {
                return {};
            }
        });
    };
    return retObj;
}]);
*/