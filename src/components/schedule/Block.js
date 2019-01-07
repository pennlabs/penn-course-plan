import React, {Component} from 'react'

export default class Block extends Component {
  render() {
      let warning = <div className={"NeedAssc"}
                         title={"Registration is required for an associated section."}><b>!</b></div>;
      if (this.props.showWarning) {
          warning = null;
      }
      return <div className={"SchedBlock_container " + this.props.letterDay + " " + this.props.topC}
                  style={{left: this.props.x + "%", top: this.props.y + "%", width: this.props.width + "%", height: this.props.height + "%"}}>
          <div className={"SchedBlock " + this.props.letterDay + " " + this.props.topC + " " + this.props.assignedClass} id={this.props.id}
               onClick={() => {
                 console.log('block clicked', this.props.name)
               }}>
              <div className={"CloseX"} style={{width: 100 + "%", height: 100 + "%"}}><span
                  onClick={e => {
                      e.stopPropagation();
                      console.log('block removed', this.props.name)}}>X</span></div>
              {warning}
              <span className={"SecName"}>{this.props.name}</span>
          </div>
      </div>
  }
}