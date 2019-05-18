import React, {Component} from 'react';
import GenericModal from "./generic_modal_container";
import {validateScheduleName} from "../schedule/schedule_name_validation";

export const CLEAR_SCHEDULE_MODAL_NAME = "clear_schedule_modal";


class ClearScheduleModalInterior extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        if (this.props.modalActionState === "success") {
            this.props.clearSchedule();
            this.props.close();
        }
        return null;
    }

}

export default class ClearScheduleModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <GenericModal modalName={CLEAR_SCHEDULE_MODAL_NAME} title={"Clear Schedule?"}
                             containedContent={[<ClearScheduleModalInterior/>]} successButton={"Ok"}/>;
    }

}