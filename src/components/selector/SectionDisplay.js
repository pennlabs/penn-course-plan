import React, { Component } from 'react';


export default class SectionDisplay extends Component {
  constructor(props) {
      super(props);
      this.section = this.props.section;
      this.getAddRemoveIcon = this.getAddRemoveIcon.bind(this);
      this.getPcaButton = this.getPcaButton.bind(this);
      this.getInstructorReview = this.getInstructorReview.bind(this);
      this.openSection = function () {
      }
  }

  getAddRemoveIcon() {
      let className = "fa";
      const schedSections = [];
      if (schedSections.indexOf(this.section.idDashed) === -1) {
          className += " fa-plus";
      } else if (schedSections.indexOf(this.section.idDashed) > -1) {
          className += " fa-times";
      }
      const onClick = function () {
      };
      return <i className={className}
                onClick={onClick}/>;
  }

  getPcaButton() {
      const onClick = function () {
      };
      return <i className={"fa fa-bell-o tooltip"}
                onClick={onClick}
                title="Penn Course Alert"/>;
  }

  getInstructorReview() {
      const bgColor = "rgba(46, 204, 113," + this.section.pcrIShade + ")";
      return <span className={"PCR Inst"}
                   style={{background: bgColor, color: this.section.pcrIColor}}
                   onClick={this.openSection}>{this.section.revs.cI}</span>;
  }

  justSection(s) {
    return s.substring(s.lastIndexOf(' ') + 1)
  }

  stripTime(s) {
    s = s.replace(' to ', '-')
    s = s.replace('on', '')
    return s
  }

  render() {
      let className = this.section.actType;
      if(this.section === this.section.idSpaced.replace(' ', '').replace(' ', '')){
          className += " activeItem";
      }
      /*if((!$scope.sched.SecOverlap(this.section) && $scope.schedSections.indexOf(this.section.idDashed) === -1)){
          className += "hideSec";
      }*/
      return <li
          id={this.section.idDashed}
          className={className}>
          <div className={"columns is-gapless"}>

              <div className={"column is-one-fifth"}>
                  {this.getAddRemoveIcon()}
                  <span className={"statusClass " + (this.section.isOpen ? "openSec" : "closedSec")}
                        onClick={this.openSection}>
                      {(!this.section.isOpen) && this.getPcaButton()}
                  </span>
              </div>

              <div className="column is-one-fifth">
                  {this.getInstructorReview()}
              </div>

              <div className={"column is-one-fifth"} style={{marginLeft: "0.4rem"}}>
                  <span className="sectionText"
                        onClick={this.openSection}>
                      {
                          this.justSection(this.section.idSpaced)
                      }
                  </span>
              </div>

              <div className={"column"}>
                  <span className={"sectionText"}
                        onClick={this.openSection}>
                      {
                          this.stripTime(this.section.timeInfo)
                      }
                  </span>
              </div>
          </div>
      </li>
  }
}