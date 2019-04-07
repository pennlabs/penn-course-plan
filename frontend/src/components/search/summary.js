import React, {Component} from 'react';
import {Dropdown} from "../dropdown";
import connect from "react-redux/es/connect/connect";

class SummaryDropdown extends Component {
    constructor(props) {
        super(props);
    }



    computeStats = () => {
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
        
        if (this.props.schedData.meetings.length === 0) {
            return null;
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

    parseTime = (time) => {
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
        return (
            <Dropdown def_text={"Summary"} contents={[
                ["Earliest Class: " + (data === null ? "N/A" : this.parseTime(data.earlyt)), () => {}], 
                ["Latest Class: " + (data === null ? "N/A" : this.parseTime(data.latet)), () => {}],
                ["Longest Day: " + (data === null ? "N/A" : data.maxhoursd + " hours") , () => {}], 
                ["Average Hours/Day: " + (data === null ? "N/A" : data.avghr.toFixed(2)), () => {}], 
                ["Average Difficulty: " + (data === null ? "N/A" : data.avgdf.toFixed(2)), () => {}]
            ]} />
        )
    }

    
} 

const mapStateToProps = (state) => {
    return {
        schedData: state ? state.schedule.schedules[state.schedule.scheduleSelected] : undefined
    };
};



export default connect(mapStateToProps, null)(SummaryDropdown);
