import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

export const NEW_SCHEDULE_MODAL_NAME = "new_schedule_modal";
const illegalCharacters = /[^a-zA-Z\d\s-_]/;


export default class NewScheduleModalInterior extends Component {

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
        const feedbackString = this.state.currentName === "" ? "Name cannot be empty" :
            this.state.currentName.match(illegalCharacters) ?
                "Name can only contain spaces, underscores, dashes, letters, and numbers" :
                this.state.currentName.length > 25 ? "Name is too long" :
                    self.props.existingScheduleNames.indexOf(this.state.currentName) !== -1
                        ? "Schedule with this name already exists" : "";
        if (this.props.modalActionState === "success") {
            console.log("Attempted submission");
            if (feedbackString.length === 0) {
                console.log("Successful submission");
                this.props.createNewSchedule(this.state.currentName);
                this.props.close();
            } else {
                console.log("Unsuccessful submission");
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