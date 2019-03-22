import React, {Component} from 'react';
import {Dropdown} from "../dropdown";

export default class SchedulesDropdown extends Component {

    render() {
        return <Dropdown contents={this.props.scheduleNames.map(name => [name, () => this.props.changeSchedule(name)])}
                         updateLabel={true} def_active={0} def_text={this.props.scheduleSelected}/>
    }
}

