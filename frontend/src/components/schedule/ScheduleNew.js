import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

import {removeSchedItem} from "../../actions";

import './schedule.css'
import Days from './Days'
import Times from './Times'
import BlockNew from './BlockNew'
import GridLines from './GridLines'

class ScheduleNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {schedData, removeSection} = this.props;
        let sections = schedData.meetings || [];

        let startHour = 10;
        let endHour = 15.5;

        startHour = Math.min(startHour, ...sections.map(m => m.meetHour)) - 1;
        endHour = Math.max(endHour, ...sections.map(m => m.meetHour + m.hourLength)) + 1;

        let rowOffset = 1;
        let colOffset = 1;

        const getNumRows = () => {
            return (endHour - startHour) * 2 + rowOffset
        }

        const getColor = (() => {
            const colors = ["blue", "red", "aqua", "orange", "green", "pink", "sea", "indigo"];
            let i = 0;
            return () => colors[i++ % colors.length]
        })()

        let meetings = [];
        sections.forEach(m => {
            let days = m.meetDay.split('');
            const color = getColor();
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
                        color: color
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
            <div className={'schedule box'} style={dims}>
                <Days offset={colOffset} />
                <Times
                    startTime={startHour}
                    endTime={endHour}
                    numRow={getNumRows()}
                    offset={rowOffset}

                />
                <GridLines
                    numRow={getNumRows()}
                    numCol={6}
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