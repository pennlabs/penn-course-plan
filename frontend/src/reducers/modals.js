import {CLOSE_MODAL, OPEN_MODAL} from "../actions";

const initialState = {
    modalShown: "new_schedule_modal"
};

export const modals = (state = initialState, action) => {
    switch(action.type) {
        case OPEN_MODAL:
            return {
                ... state,
                modalShown: action.modalShown
            };
        case CLOSE_MODAL:
            return {
                ... state,
                modalShown: null
            };
        default:
            return state
    }
};