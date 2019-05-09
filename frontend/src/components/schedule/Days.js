import React, {Component} from 'react';

export default class Days extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let { offset } = this.props
        let days = this.props.days || ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
        let style = {
            display: 'grid',
            gridColumnStart: 1 + offset,
            gridColumnEnd: 6 + offset,
            gridRow: 1,
            gridTemplateColumns: 'repeat(5, 1fr)',
            textAlign: 'center',
        }
        return (
            <div style={style}>
                {days.map(e => <span key={e}>{e}</span>)}
            </div>
        )
    }
}