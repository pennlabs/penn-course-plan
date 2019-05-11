import React, {Component} from 'react';

export default class Days extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { offset, weekend } = this.props
        let days = weekend ? ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'] : ['MON', 'TUE', 'WED', 'THU', 'FRI']
        let style = {
            display: 'grid',
            gridColumnStart: 1 + offset,
            gridColumnEnd: days.length + 1 + offset,
            gridRow: 1,
            gridTemplateColumns: `repeat(${days.length}, 1fr)`,
            textAlign: 'center',
        }
        return (
            <div style={style}>
                {days.map(e => <span className={'day'} key={e}>{e}</span>)}
            </div>
        )
    }
}