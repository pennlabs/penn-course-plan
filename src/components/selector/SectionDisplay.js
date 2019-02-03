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
        const scheduleModifier = this.props.scheduleModifier;
        const schedSections = [];
        //TODO: insert actual schedSections
        let add = true;
        for (let i = 0; i < schedSections.length; i++) {
            let schedSection = schedSections[i];
            if (schedSection.idDashed === this.section.idDashed) {
                add = false;
                break;
            }
        }
        if (add) {
            className += " fa-plus";
        } else {
            className += " fa-times";
        }
        let onClick = undefined;

        const section = this.section;
        if (add) {
            onClick = () => {
                console.log("Adding: ", section);
                this.props.addSchedItem(section.fullSchedInfo[0]);
            };
        } else {
            onClick = function () {
                console.log("Removing: ", section);
                this.props.removeSchedItem(section.fullSchedInfo[0]);
            };
        }

        return <i className={className}
                  onClick={onClick}/>;
    }

    static getPcaButton() {
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