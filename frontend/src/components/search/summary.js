import React, {Component} from 'react';
import {OutClickable} from "../dropdown";
import connect from "react-redux/es/connect/connect";

class SummaryDropdown extends OutClickable {
    constructor(props) {
        super(props);
        this.collapse = this.collapse.bind(this);
        this.toggle_dropdown = this.toggle_dropdown.bind(this);
        this.computeStats = this.computeStats.bind(this);
        this.parseTime = this.parseTime.bind(this);
        this.state = {active: false};
    }

    collapse() {
        this.setState({active: false});
    }

    activate_dropdown() {
        this.setState({active: true});
    }

    toggle_dropdown() {
        if (this.state.active) {
            this.collapse();
        } else {
            this.activate_dropdown();
        }
    }

    computeStats() {
        // Computes the following statistics from schedule from props
        // 1. Average hours per day
        // 2. Average difficulty 
        // 3. Earliest start time
        // 4. Latest end time 
        // 5. Max hours a day

        let data = {
            "avghr" : 0,
            "avgdf" : 0,
            "earlyt" : 100, 
            "latet" : -1, 
            "maxhoursd" : 0
        };

        if (!this.props.schedData) {
            return data;
        }
        
        let courseList = this.props.schedData.meetings;
        let numCourses = courseList.length;
        let dayHoursMap = new Map();

        courseList.map(course => {
            data.earlyt = Math.min(data.earlyt, course.meetHour);
            data.latet = Math.max(data.latet, course.meetHour + course.hourLength);
            data.avgdf += course.revs.cD;
            let meetDay = course.meetDay;
            [...meetDay].forEach(c => {
                let currNum = dayHoursMap.get(c) ? dayHoursMap.get(c) : 0;
                dayHoursMap.set(c, currNum + course.hourLength);
            })
        });

        for (let [k,v] of dayHoursMap) {
            data.maxhoursd = Math.max(data.maxhoursd, v);
            data.avghr += v;
        }

        data.avghr /= 5;
        data.avgdf /= numCourses;


        return data;
    }

    parseTime(time) {
        if (time > 11) {
            if (time > 12) {
                return (time - 12) + " PM";
            } 
            return time + " PM";
        } else {
            return time + " AM";
        }
    } 

    render() {
        let addition = "";
        let data = this.computeStats();
        if (this.state.active) {
            addition = " is-active";
        }



        return (
            <div className={"dropdown " + addition} ref={this.setWrapperRef}>
                <div className={"dropdown-trigger"} onClick={this.toggle_dropdown}>
                    <button className={"button"} aria-haspopup={true} aria-controls={"dropdown-menu"}>
                        <span>
                            <span className={"selected_name"}>Summary</span>
                            <span className="icon is-small">
                                <i className="fa fa-angle-down" aria-hidden="true"/>
                            </span>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        {/* {Remember to check if data.earlyt === initialValue} */}
                        <p className={"dropdown-item"}>{"Earliest Class: " + this.parseTime(data.earlyt)}</p>
                        <p className={"dropdown-item"}>{"Latest Class: " + this.parseTime(data.latet)}</p>
                        <p className={"dropdown-item"}>{"Longest Day: " + data.maxhoursd + " hours"}</p>
                        <p className={"dropdown-item"}>{"Average Hours/Day: " + data.avghr}</p>
                        <p className={"dropdown-item"}>{"Average Difficulty: " + data.avgdf}</p>
                    </div>
                </div>
                

            </div>

        )
    }

    
} 

const mapStateToProps = (state) => {
    return {
        schedData: state ? state.schedule.schedules[state.schedule.scheduleSelected] : undefined
    };
};



export default connect(mapStateToProps, null)(SummaryDropdown);
