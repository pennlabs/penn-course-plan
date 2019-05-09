import React, {Component} from 'react';

export default class Times extends Component {

    render() {
        let { startTime, endTime, offset, numRow } = this.props;

        let timestamps = [];

        let intToTime = t => {
            let hour = Math.floor(t % 12);
            let min = (t % 1) * 60;
            let meridian = t < 12 ? 'AM' : 'PM';
            if (hour === 0) {
                hour = 12;
            }
            if (min === 0) {
                min = '00';
            }
            return `${hour}:${min} ${meridian}`
        }

        for (let i = startTime; i < endTime; i++) {
            timestamps.push((
                <span
                    style={{
                        gridRow: ((i - startTime) * 2) + 1,
                        gridColumn: 1
                    }}
                    key={i}
                >
                    {intToTime(i)}
                </span>
            ))
        }

        let style = {
            display: 'grid',
            gridTemplateRows: `repeat(${numRow-1}, 1fr)`,
            gridColumn: 1,
            gridRowStart: 1 + offset,
            gridRowEnd: numRow+1
        }
        return (
            <div style={style}>
                {timestamps}
            </div>
        )
    }
}