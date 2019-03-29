import React, {Component} from 'react';
import GenericModal from "./generic_modal_container";
import {validateScheduleName} from "../schedule/schedule_name_validation";

export const DUPLICATE_SCHEDULE_MODAL_NAME = "duplicate_schedule_modal";


class DuplicateScheduleModalInterior extends Component {

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
                this.props.duplicateSchedule(this.state.currentName);
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

export default class DuplicateScheduleModal extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <GenericModal modalName={DUPLICATE_SCHEDULE_MODAL_NAME} title={"Duplicate Schedule"}
                             containedContent={[<DuplicateScheduleModalInterior/>]} successButton={"Ok"}/>;
    }

}