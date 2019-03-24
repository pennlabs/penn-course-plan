import React, {Component} from 'react';

export const DELETE_SCHEDULE_MODAL_NAME = "delete_schedule_modal";


export default class DeleteScheduleModalInterior extends Component {

    constructor(props) {
        super(props);
        this.state = {currentName: ""};
    }

    render() {
        if (this.props.existingScheduleNames.length > 1) {
            return <div>Are you sure you want to delete?</div>;
        } else {
            return <div>You can't delete your only schedule.</div>;
        }
    }

}