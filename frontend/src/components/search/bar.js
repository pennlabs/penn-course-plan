import React, {Component} from 'react';
import {Dropdown} from "../dropdown";
import connect from "react-redux/es/connect/connect";
import {changeSchedule, openModal, toggleSearchFilterShown} from "../../actions";
import {NEW_SCHEDULE_MODAL_NAME} from "../modals/new_schedule_modal";
import SchedulesDropdown from "./SchedulesDropdown";
import {DELETE_SCHEDULE_MODAL_NAME} from "../modals/delete_schedule_modal";
import {RENAME_SCHEDULE_MODAL_NAME} from "../modals/rename_schedule_modal_container";
import {DUPLICATE_SCHEDULE_MODAL_NAME} from "../modals/duplicate_schedule_modal_container";
import {CLEAR_SCHEDULE_MODAL_NAME} from "../modals/clear_schedule_modal";

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {searchFilterOpened: false};
    }


    render() {
        const self = this;
        return <div id={"searchbar"} className={"level"}>
			<span className={"level-left"}>

				<div id={"searchSelectContainer"}>
                    <Dropdown id={"searchSelect"} update_label={true} def_active={0} def_text={"Search By"}
                              contents={[
                                  ["Course ID", () => {
                                  }],
                                  ["Keywords", () => {
                                  }],
                                  ["Instructor", () => {
                                  }]
                              ]}/>
                </div>

				<form className={"ng-valid ng-dirty ng-valid-parse ng-submitted"}>
					<input id={"CSearch"} type={"text"}
                           className={"input is-small is-rounded ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse"}
                           name={"courseSearch"} autoComplete={"off"}
                           placeholder={"Search for a department, course, or section"} autoFocus={"autofocus"}/>
				</form>
                {this.searchToggler()}
			</span>

            <span className="level-right">

				<div id="scheduleOptionsContainer">
					<Dropdown id={"scheduleDropdown"} def_text={"Schedule Options"} contents={[
                        ["New", () => {
                            self.props.showNewScheduleModal();
                        }],
                        ["Download", () => {
                        }],
                        ["Duplicate", () => {
                            self.props.showDuplicateScheduleModal();
                        }],
                        ["Rename", () => {
                            self.props.showRenameScheduleModal();
                        }],
                        ["Clear", () => {
					        self.props.showClearScheduleModal();
                        }],
                        ["Delete", () => {
                            self.props.showDeleteScheduleModal();
                        }]
                    ]}/>
				</div>
				<button className="button"><span>Show Stars</span></button>
				<a className="button" href="#UploadModal" id="ImportButton" onClick="ga('send', 'event', 'UI interaction', 'import');
																				  activate_modal(document.getElementById('UploadModal'))">
					Import
				</a>
				<button className="button"><span>Clear Search</span></button>
				<SchedulesDropdown scheduleNames={this.props.scheduleNames}
                                   scheduleSelected={this.props.scheduleSelected}
                                   changeSchedule={this.props.changeSchedule}/>
			</span>
        </div>
            ;
    }

    searchToggler() {
        const self = this;
        const selectedBackground = this.state.searchFilterOpened ? "images/filter_b.png" : "images/filter_a.png";
        let node = undefined;
        return <div id="filter_search_toggler"
                    ref={c => node = c}
                    onClick={() => {
                        self.setState({searchFilterOpened: !self.state.searchFilterOpened});
                        this.props.toggleSearchFilterShown(node.getBoundingClientRect());
                    }}
                    style={{backgroundImage: "url(" + selectedBackground + ")"}}>
        </div>;
    }

}

const mapStateToProps = (state) => (
    {
        scheduleNames: Object.keys(state.schedule.schedules),
        scheduleSelected: state.schedule.scheduleSelected
    }
);


const mapDispatchToProps = (dispatch) => ({
    toggleSearchFilterShown: rect => dispatch(toggleSearchFilterShown(rect)),
    showNewScheduleModal: () => dispatch(openModal(NEW_SCHEDULE_MODAL_NAME)),
    showDeleteScheduleModal: () => dispatch(openModal(DELETE_SCHEDULE_MODAL_NAME)),
    showRenameScheduleModal: () => dispatch(openModal(RENAME_SCHEDULE_MODAL_NAME)),
    showDuplicateScheduleModal: () => dispatch(openModal(DUPLICATE_SCHEDULE_MODAL_NAME)),
    changeSchedule: scheduleName => dispatch(changeSchedule(scheduleName)),
    showClearScheduleModal: () => dispatch(openModal(CLEAR_SCHEDULE_MODAL_NAME)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
