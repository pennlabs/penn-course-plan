import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";

import {removeSchedItem} from "../../actions";

import './schedule.css'
import Days from './Days'
import Times from './Times'
import BlockNew from './BlockNew'
import Block from "./Block"

class ScheduleNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let sched = this.props.schedData;
        let { meetings } = sched;
        meetings = meetings || []

        let startHour = 10;
        let endHour = 15.5;

        let startTimes = meetings.map(m => m.meetHour);
        let endTimes = meetings.map(m => m.meetHour + m.hourLength);
        startHour = Math.min(startHour, ...startTimes) - 1;
        endHour = Math.max(endHour, ...endTimes) + 1;

        let rowOffset = 1;
        let colOffset = 1;

        const getNumRows = () => {
            return (endHour - startHour) * 2 + rowOffset
        }

        let dims = {
            gridTemplateColumns: `.4fr repeat(${5}, 1fr)`,
            gridTemplateRows: `repeat(${getNumRows()}, 1fr)`,
        }


        const offsets = {
            time: startHour,
            row: rowOffset,
            col: colOffset,
        }

        let blockData = [];
        meetings.forEach(m => {
            let days = m.meetDay.split('');
            blockData.push(...days.map(d => {
                return {
                    data: {
                        day: d,
                        start: m.meetHour,
                        end: m.meetHour + m.hourLength
                    },
                    course: m.idDashed,
                }
            }))
        })

        let blocks = blockData.map(b => (
            <BlockNew
                meeting={b.data}
                offsets={offsets}
                key={`${b.course}-${b.data.day}`}
            >
                {b.course}
            </BlockNew>
        ))

        return (
            <div className={'schedule'} style={dims}>
                <Days offset={colOffset} />
                <Times
                    startTime={startHour}
                    endTime={endHour}
                    numRow={getNumRows()}
                    offset={rowOffset} />

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
        removeSchedItem: idDashed => dispatch(removeSchedItem(idDashed))
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleNew);