import React, {Component} from 'react';
import GenericModal from "./generic_modal_container";

export const DELETE_SCHEDULE_MODAL_NAME = "delete_schedule_modal";


class DeleteScheduleModalInterior extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.existingScheduleNames.length > 1) {
            if (this.props.modalActionState === "success") {
                this.props.deleteSchedule();
                this.props.close();
            }
            return <div>{"Are you sure you want to delete?"}</div>;
        } else {
            return <div>{"You can't delete your only schedule."}</div>;
        }
    }

}

export default class DeleteScheduleModal extends Component {
    render() {
        return <GenericModal modalName={"delete_schedule_modal"} title={"Delete Schedule"}
                             containedContent={[<DeleteScheduleModalInterior/>]}
                             successButton={"ok"}/>;
    }
}