import { CLOSE_MODAL, OPEN_MODAL, ACTION_BUTTON_PRESSED } from "../actions";

const initialState = {
    modalShown: null,
    modalAction: null,
};

export const modals = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modalShown: action.modalShown,
            };
        case CLOSE_MODAL:
            return {
                ...state,
                modalShown: null,
                modalAction: null,
            };
        case ACTION_BUTTON_PRESSED:
            return {
                ...state,
                modalAction: action.modalAction,
            };
        default:
            return state;
    }
};
