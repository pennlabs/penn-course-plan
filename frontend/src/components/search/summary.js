import React, {Component} from 'react';
import {OutClickable} from "../dropdown";
import connect from "react-redux/es/connect/connect";

class SummaryDropdown extends OutClickable {
    constructor(props) {
        super(props);
        this.collapse = this.collapse.bind(this);
        this.toggle_dropdown = this.toggle_dropdown.bind(this);
        this.computeStats = this.computeStats.bind(this);
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
        // 5. Average workload of courses
        // 6. Max hours a day

        //!!!!! getting Review ratings from SCHEDULE ITEMS in REDUX store

        let data = {
            "avghr" : 0,
            "avgdf" : 0,
            "earlyt" : 100, 
            "latet" : -1, 
            "avgwork" : 0, 
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
        console.log(dayHoursMap);
        data.avghr /= 5;


        return data;
    }

    render() {
        let addition = "";
        let data = this.computeStats();
        if (this.state.active) {
            addition = " is-active";
        }
        // console.log(this.state.active);

        return (
            <div className={"dropdown is-right" + addition} ref={this.setWrapperRef}>
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
                        {console.log(this.props.sections)}
                        {console.log(this.props.schedData)}
                        {/* {Remember to check if data.earlyt === initialValue} */}
                        <p>{data.earlyt}</p>
                        <p>{data.maxhoursd}</p>
                        <p>{data.avghr}</p>
                    </div>
                </div>
                

            </div>

        )
    }

    
} 

const mapStateToProps = (state) => {
    return {
        schedData: state ? state.schedule.schedules[state.schedule.scheduleSelected] : undefined,
        sections: state ? state.sections.sections : undefined
    };
};



export default connect(mapStateToProps, null)(SummaryDropdown);
