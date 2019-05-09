import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

import {removeSchedItem} from "../../actions";

import './schedule.css'
import Days from './Days'
import Times from './Times'
import BlockNew from './BlockNew'

class ScheduleNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {schedData, removeSection} = this.props;
        console.log('props', schedData)
        let sections = schedData.meetings || [];

        let startHour = 10;
        let endHour = 15.5;

        let startTimes = sections.map(m => m.meetHour);
        let endTimes = sections.map(m => m.meetHour + m.hourLength);
        startHour = Math.min(startHour, ...startTimes) - 1;
        endHour = Math.max(endHour, ...endTimes) + 1;

        let rowOffset = 1;
        let colOffset = 1;

        const getNumRows = () => {
            return (endHour - startHour) * 2 + rowOffset
        }

        let meetings = [];
        sections.forEach(m => {
            let days = m.meetDay.split('');
            meetings.push(...days.map(d => {
                return {
                    data: {
                        day: d,
                        start: m.meetHour,
                        end: m.meetHour + m.hourLength
                    },
                    course: {
                        id: m.idDashed,
                        fullID: m.fullID,
                        color: 'dodgerblue'
                    },
                }
            }))
        })
        let blocks = meetings.map(meeting => (
            <BlockNew
                meeting={meeting.data}
                offsets={{
                    time: startHour,
                    row: rowOffset,
                    col: colOffset,
                }}
                key={`${meeting.course.id}-${meeting.data.day}`}
                id={meeting.course.id}
                color={meeting.course.color}
                remove={() => removeSection(meeting.course.fullID)}
            />
        ))

        let dims = {
            gridTemplateColumns: `.4fr repeat(${5}, 1fr)`,
            gridTemplateRows: `repeat(${getNumRows()}, 1fr)`,
        }

        return (
            <div className={'schedule'} style={dims}>
                <Days offset={colOffset} />
                <Times
                    startTime={startHour}
                    endTime={endHour}
                    numRow={getNumRows()}
                    offset={rowOffset}

                />
                {blocks}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        schedData: state.schedule.schedules[state.schedule.scheduleSelected]
    };
};

const mapDispatchToProps = (dispatch) => (
    {
        removeSection: idDashed => dispatch(removeSchedItem(idDashed))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleNew);