import React, {Component} from 'react';
import './schedule.css'

import Days from './Days'
import Times from './Times'
import BlockNew from './BlockNew'

export default class ScheduleNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        // let sched = this.props.schedData;
        // let { meetings } = this.props.schedData;
        let startHour = 10;
        let endHour = 15.5;

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
        return (
            <div className={'schedule'} style={dims}>
                <Days offset={colOffset} />
                <Times
                    startTime={startHour}
                    endTime={endHour}
                    numRow={getNumRows()}
                    offset={rowOffset} />

                <BlockNew
                    meeting={{
                        day: 'T',
                        start: 12,
                        end: 13.5
                    }}
                    offsets={offsets}
                >
                    CIS 120 001
                </BlockNew>

            </div>
        )
    }
}