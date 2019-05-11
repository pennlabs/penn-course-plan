import React, {Component} from 'react';

export default class BlockNew extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const days = ['M', 'T', 'W', 'R', 'F', 'S', 'U'];
        let {offsets, meeting, id, color, remove, style, showWarning} = this.props;
        let {day, start, end} = meeting;
        const pos = {
            gridRowStart: (start - offsets.time) * 2 + offsets.row+1,
            gridRowEnd: (end - offsets.time) * 2 + offsets.col+1,
            gridColumn: days.indexOf(day) + 1 + offsets.col,
            position: 'relative',
        }
        return (
            <div className={`block ${color}`} style={{...pos, ...style}}>
                <div className={'inner-block'}>
                    <span
                        className={'remove'}
                        onClick={e => {
                            remove();
                            e.stopPropagation();
                        }}
                    ><i className="fas fa-times" /></span>
                    <span
                        className={showWarning ? '' : 'hide'}
                        title={"Registration is required for an associated section."}
                    ><i className="fas fa-exclamation warning" /></span>
                    <span>{id.replace(/-/g, ' ')}</span>
                </div>
            </div>
        )
    }
}