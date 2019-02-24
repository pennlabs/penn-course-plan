import React, {Component} from 'react';


export default class SectionDisplay extends Component {
    constructor(props) {
        super(props);
        this.section = this.props.section;
        this.getAddRemoveIcon = this.getAddRemoveIcon.bind(this);
        this.getInstructorReview = this.getInstructorReview.bind(this);
        SectionDisplay.getPcaButton = SectionDisplay.getPcaButton.bind(this);
    }

    getAddRemoveIcon() {
        let className = "fa";
        const addSchedItem = this.props.addSchedItem;
        const removeSchedItem = this.props.removeSchedItem;
        if (!this.props.inSchedule) {
            className += " fa-plus";
        } else {
            className += " fa-times";
        }
        let onClick = undefined;

        const section = this.section;
        if (!this.props.inSchedule) {
            onClick = () => {
                addSchedItem(section.fullSchedInfo[0]);
            };
        } else {
            onClick = function () {
                removeSchedItem(section.fullSchedInfo[0].fullID);
            };
        }

        return <i className={className}
                  onClick={onClick}/>;
    }

    static getPcaButton() {
        const onClick = function () {
        };
        return <i className={"far fa-bell"}
                  onClick={onClick}
                  title="Penn Course Alert"/>;
    }

    getInstructorReview() {
        const bgColor = "rgba(46, 204, 113," + this.section.pcrIShade + ")";
        return <span className={"PCR Inst"}
                     style={{background: bgColor, color: this.section.pcrIColor}}
                     onClick={this.props.openSection}>{this.section.revs.cI}</span>;
    }

    static justSection(s) {
        return s.substring(s.lastIndexOf(' ') + 1)
    }

    static stripTime(s) {
        s = s.replace(' to ', '-');
        s = s.replace('on', '');
        return s
    }

    render() {
        let className = this.section.actType;
        if (this.section === this.section.idSpaced.replace(' ', '').replace(' ', '')) {
            className += " activeItem";
        }
        if(this.props.overlap){
            className += "hideSec";
            console.log("hideSEc");
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
                          onClick={this.props.openSection}>
                      {(!this.section.isOpen) && SectionDisplay.getPcaButton()}
                  </span>
                </div>

                <div className="column is-one-fifth">
                    {this.getInstructorReview()}
                </div>

                <div className={"column is-one-fifth"} style={{marginLeft: "0.4rem"}}>
                  <span className="sectionText"
                        onClick={this.props.openSection}>
                      {
                          SectionDisplay.justSection(this.section.idSpaced)
                      }
                  </span>
                </div>

                <div className={"column"}>
                  <span className={"sectionText"}
                        onClick={this.props.openSection}>
                      {
                          SectionDisplay.stripTime(this.section.timeInfo)
                      }
                  </span>
                </div>
            </div>
        </li>
    }
}