import * as React from "react";

export class SearchBar extends React.Component{

    render() {
        return <div id={"searchbar"} className={"level"}>
			<span className={"level-left"}>

				<div id={"searchSelectContainer"}>
					<div id={"searchSelect"} className={"dropdown"}>
						<div
                            className={"dropdown-trigger"}>
							<button className={"button"} aria-haspopup={"true"}
                                    aria-controls={"dropdown-menu"}>
								<span>
									<span
                                        className={"selected_name"}>Search By</span>
								<span className={"icon is-small"}><i
                                    className={"fa fa-angle-down"} aria-hidden={"true"}/>
								</span>
								</span>
							</button>
						</div>
						<div
                            className={"dropdown-menu"} role={"menu"}>
							<div className={"dropdown-content"}>
                    <a className={"dropdown-item is-active"}>Course ID</a>
                    <a className={"dropdown-item"}>Keywords</a>
                    <a className={"dropdown-item"}>Instructor</a>
                </div>
                </div>
                </div>
                </div>

				<form className={"ng-valid ng-dirty ng-valid-parse ng-submitted"}>
					<input id={"CSearch"} type={"text"}
                           className={"input is-small is-rounded ng-valid ng-touched ng-not-empty ng-dirty ng-valid-parse"}
                           name={"courseSearch"} autoComplete={"off"}
                           placeholder={"Search for a department, course, or section"} autoFocus={"autofocus"}/>
				</form>
				<div id="filter_search_toggler" onClick="toggle_filter_search_display(this);"
                     style={{backgroundImage:"url(&quot;/css/filter_a.png&quot;)"}}>
				</div>
			</span>

            <span className="level-right">

				<div id="scheduleOptionsContainer"><div id="scheduleDropdown" className="dropdown"><div
                    className="dropdown-trigger"><button className="button" aria-haspopup="true"
                                                         aria-controls="dropdown-menu"><span><span
                    className="selected_name">Schedule Options</span><span className="icon is-small"><i
                    className="fa fa-angle-down" aria-hidden="true"/></span></span></button></div><div
                    className="dropdown-menu" role="menu"><div className="dropdown-content"><a
                    className="dropdown-item">New</a><a className="dropdown-item">Download</a> <a
                    className="dropdown-item">Duplicate</a>
					<a className="dropdown-item">Rename</a>
					<a className="dropdown-item">Clear</a>
					<a className="dropdown-item">Delete</a></div></div></div></div>
				<button className="button"><span>Show Stars</span></button>
				<a className="button" href="#UploadModal" id="ImportButton" onClick="ga('send', 'event', 'UI interaction', 'import');
																				  activate_modal(document.getElementById('UploadModal'))">
					Import
				</a>
				<button className="button"><span>Clear Search</span></button>
				<div className="dropdown" onClick="toggle_activation(this)">
					  <div className="dropdown-trigger">
						<button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
							<span><span className="selected_name">Schedules</span><span className="icon is-small"><i
                                className={"fa fa-angle-down"}/></span></span>

						</button>
					  </div>
					  <div className="dropdown-menu" id="dropdown-menu" role="menu">
						<div className="dropdown-content ng-pristine ng-untouched ng-valid ng-not-empty"
                             id="sched-select" role="menu"
                        >
						  <a
                              onClick="activate_dropdown_item(this);change_schedule(this);"
                              className="dropdown-item ng-binding ng-scope"
                          >
							Schedule
						  </a>
							<a
                                onClick="activate_dropdown_item(this);change_schedule(this);"
                                className="dropdown-item ng-binding ng-scope"
                            >
							Imported
						  </a>
						</div>
					  </div>
					</div>
			</span>
        </div>
            ;
    }

}