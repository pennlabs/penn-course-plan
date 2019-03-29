import React, {Component} from 'react';
import GenericModal from "./generic_modal_container";
import {validateScheduleName} from "../schedule/schedule_name_validation";

export const RENAME_SCHEDULE_MODAL_NAME = "rename_schedule_modal";


class RenameScheduleModalInterior extends Component {

    constructor(props) {
        super(props);
        this.state = {currentName: ""};
    }

    render() {
        const self = this;
        let newScheduleNameInput = null;
        const storeInputRef = (ref) => {
            newScheduleNameInput = ref;
        };
        const feedbackString = validateScheduleName(this.state.currentName, this.props.existingScheduleNames);
        if (this.props.modalActionState === "success") {
            if (feedbackString.length === 0) {
                this.props.renameSchedule(this.state.currentName);
                this.props.close();
            } else {
                this.props.triggerModalAction(null);
            }
        }
        return <div>
            <input type={"text"} ref={storeInputRef} onKeyUp={(e) => {
                self.setState({currentName: newScheduleNameInput.value});
                if (e.key === "Enter") {
                    self.props.triggerModalAction("success");
                }
            }}/>
            <div>
                {feedbackString}
            </div>
        </div>;
    }

}

export default class RenameScheduleModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <GenericModal modalName={RENAME_SCHEDULE_MODAL_NAME} title={"Rename Schedule"}
                             containedContent={[<RenameScheduleModalInterior/>]} successButton={"Ok"}/>;
    }

}