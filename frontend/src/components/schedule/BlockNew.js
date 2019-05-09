import React, {Component} from 'react';

export default class BlockNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const days = ['M', 'T', 'W', 'R', 'F', 'S', 'U'];
        let {day, start, end} = this.props.meeting;
        let {offsets} = this.props;

        const pos = {
            gridRowStart: (start - offsets.time) * 2 + offsets.row+1,
            gridRowEnd: (end - offsets.time) * 2 + offsets.col+1,
            gridColumn: days.indexOf(day) + 1 + offsets.col
        }

        return (
            <div className={'block'} style={pos}>
                {this.props.children}
            </div>
        )
    }
}