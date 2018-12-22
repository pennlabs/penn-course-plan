import React, { Component } from 'react';
import './App.css';

let sectionsObj = null;

let sections_data_a  = [{"idDashed":"CIS-110-001","idSpaced":"CIS 110 001","isOpen":true,"timeInfo":"10:00 to 11:00 on MWF","courseTitle":"Introduction to Computer Programming","SectionInst":"Paul W. Mcburney","actType":"LEC","revs":{"cQ":2.54,"cD":3.36,"cI":2.52,"QDratio":-0.8199999999999998,"cQT":"2.54","cDT":"3.36"},"fullSchedInfo":[{"fullID":"CIS-110-001-MWF10","idDashed":"CIS-110-001","idSpaced":"CIS 110 001","hourLength":1,"meetDay":"MWF","meetHour":10,"meetLoc":" ","SchedAsscSecs":["CIS-110-201","CIS-110-202","CIS-110-203","CIS-110-204","CIS-110-205","CIS-110-206","CIS-110-207","CIS-110-208","CIS-110-209","CIS-110-210","CIS-110-211","CIS-110-212","CIS-110-213","CIS-110-214","CIS-110-215","CIS-110-216","CIS-110-217","CIS-110-218","CIS-110-219","CIS-110-220"]}],"pcrQShade":0.51209575,"pcrDShade":1.1854079999999998,"pcrIShade":0.500094,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-002","idSpaced":"CIS 110 002","isOpen":true,"timeInfo":"12:00 to 1:00 on MWF","courseTitle":"Introduction to Computer Programming","SectionInst":"Paul W. Mcburney","actType":"LEC","revs":{"cQ":2.54,"cD":3.36,"cI":2.52,"QDratio":-0.8199999999999998,"cQT":"2.54","cDT":"3.36"},"fullSchedInfo":[{"fullID":"CIS-110-002-MWF12","idDashed":"CIS-110-002","idSpaced":"CIS 110 002","hourLength":1,"meetDay":"MWF","meetHour":12,"meetLoc":" ","SchedAsscSecs":["CIS-110-201","CIS-110-202","CIS-110-203","CIS-110-204","CIS-110-205","CIS-110-206","CIS-110-207","CIS-110-208","CIS-110-209","CIS-110-210","CIS-110-211","CIS-110-212","CIS-110-213","CIS-110-214","CIS-110-215","CIS-110-216","CIS-110-217","CIS-110-218","CIS-110-219","CIS-110-220"]}],"pcrQShade":0.51209575,"pcrDShade":1.1854079999999998,"pcrIShade":0.500094,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-201","idSpaced":"CIS 110 201","isOpen":true,"timeInfo":"12:00 to 2:00 on M","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-201-M12","idDashed":"CIS-110-201","idSpaced":"CIS 110 201","hourLength":2,"meetDay":"M","meetHour":12,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-202","idSpaced":"CIS 110 202","isOpen":true,"timeInfo":"2:00 to 4:00 on M","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-202-M14","idDashed":"CIS-110-202","idSpaced":"CIS 110 202","hourLength":2,"meetDay":"M","meetHour":14,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-203","idSpaced":"CIS 110 203","isOpen":false,"timeInfo":"3:00 to 5:00 on M","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-203-M15","idDashed":"CIS-110-203","idSpaced":"CIS 110 203","hourLength":2,"meetDay":"M","meetHour":15,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-204","idSpaced":"CIS 110 204","isOpen":true,"timeInfo":"4:00 to 6:00 on M","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-204-M16","idDashed":"CIS-110-204","idSpaced":"CIS 110 204","hourLength":2,"meetDay":"M","meetHour":16,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-205","idSpaced":"CIS 110 205","isOpen":false,"timeInfo":"12:00 to 2:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-205-T12","idDashed":"CIS-110-205","idSpaced":"CIS 110 205","hourLength":2,"meetDay":"T","meetHour":12,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-206","idSpaced":"CIS 110 206","isOpen":true,"timeInfo":"2:00 to 4:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-206-T14","idDashed":"CIS-110-206","idSpaced":"CIS 110 206","hourLength":2,"meetDay":"T","meetHour":14,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-207","idSpaced":"CIS 110 207","isOpen":false,"timeInfo":"3:00 to 5:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-207-T15","idDashed":"CIS-110-207","idSpaced":"CIS 110 207","hourLength":2,"meetDay":"T","meetHour":15,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-208","idSpaced":"CIS 110 208","isOpen":true,"timeInfo":"4:00 to 6:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-208-T16","idDashed":"CIS-110-208","idSpaced":"CIS 110 208","hourLength":2,"meetDay":"T","meetHour":16,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-209","idSpaced":"CIS 110 209","isOpen":true,"timeInfo":"5:00 to 7:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-209-T17","idDashed":"CIS-110-209","idSpaced":"CIS 110 209","hourLength":2,"meetDay":"T","meetHour":17,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-210","idSpaced":"CIS 110 210","isOpen":true,"timeInfo":"2:00 to 3:00 on M","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-210-M14","idDashed":"CIS-110-210","idSpaced":"CIS 110 210","hourLength":1,"meetDay":"M","meetHour":14,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-211","idSpaced":"CIS 110 211","isOpen":true,"timeInfo":"2:00 to 3:00 on M","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-211-M14","idDashed":"CIS-110-211","idSpaced":"CIS 110 211","hourLength":1,"meetDay":"M","meetHour":14,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-212","idSpaced":"CIS 110 212","isOpen":true,"timeInfo":"5:00 to 6:00 on M","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-212-M17","idDashed":"CIS-110-212","idSpaced":"CIS 110 212","hourLength":1,"meetDay":"M","meetHour":17,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-213","idSpaced":"CIS 110 213","isOpen":true,"timeInfo":"6:00 to 7:00 on M","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-213-M18","idDashed":"CIS-110-213","idSpaced":"CIS 110 213","hourLength":1,"meetDay":"M","meetHour":18,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-214","idSpaced":"CIS 110 214","isOpen":true,"timeInfo":"11:00 to 12:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-214-T11","idDashed":"CIS-110-214","idSpaced":"CIS 110 214","hourLength":1,"meetDay":"T","meetHour":11,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-215","idSpaced":"CIS 110 215","isOpen":true,"timeInfo":"12:00 to 1:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-215-T12","idDashed":"CIS-110-215","idSpaced":"CIS 110 215","hourLength":1,"meetDay":"T","meetHour":12,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-216","idSpaced":"CIS 110 216","isOpen":true,"timeInfo":"2:00 to 3:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-216-T14","idDashed":"CIS-110-216","idSpaced":"CIS 110 216","hourLength":1,"meetDay":"T","meetHour":14,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-217","idSpaced":"CIS 110 217","isOpen":true,"timeInfo":"2:00 to 3:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-217-T14","idDashed":"CIS-110-217","idSpaced":"CIS 110 217","hourLength":1,"meetDay":"T","meetHour":14,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-218","idSpaced":"CIS 110 218","isOpen":true,"timeInfo":"3:00 to 4:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-218-T15","idDashed":"CIS-110-218","idSpaced":"CIS 110 218","hourLength":1,"meetDay":"T","meetHour":15,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-219","idSpaced":"CIS 110 219","isOpen":true,"timeInfo":"4:00 to 5:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-219-T16","idDashed":"CIS-110-219","idSpaced":"CIS 110 219","hourLength":1,"meetDay":"T","meetHour":16,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"},{"idDashed":"CIS-110-220","idSpaced":"CIS 110 220","isOpen":true,"timeInfo":"6:00 to 7:00 on T","courseTitle":"Introduction to Computer Programming","SectionInst":"","actType":"REC","revs":{"cQ":2.6,"cD":3.24,"cI":2.31,"QDratio":-0.6400000000000001,"cQT":"2.60","cDT":"3.24"},"fullSchedInfo":[{"fullID":"CIS-110-220-T18","idDashed":"CIS-110-220","idSpaced":"CIS 110 220","hourLength":1,"meetDay":"T","meetHour":18,"meetLoc":" ","SchedAsscSecs":["CIS-110-001","CIS-110-002"]}],"pcrQShade":0.5492500000000001,"pcrDShade":1.0628820000000003,"pcrIShade":0.38519971875000003,"pcrQColor":"white","pcrDColor":"white","pcrIColor":"white"}];
let sections_data_b = [{"idDashed":"CIS-561-401","idSpaced":"CIS 561 401","isOpen":true,"timeInfo":"1:30 to 3:00 on MW","courseTitle":"Advanced Computer Graphics","SectionInst":"Adam D Mally","actType":"LEC","revs":{"cQ":1.75,"cD":2,"cI":2.17,"QDratio":-0.25,"cQT":"1.75","cDT":"2.00"},"fullSchedInfo":[{"fullID":"CIS-561-401-MW135","idDashed":"CIS-561-401","idSpaced":"CIS 561 401","hourLength":1.5,"meetDay":"MW","meetHour":13.5,"meetLoc":" ","SchedAsscSecs":[]}],"pcrQShade":0.16748046875,"pcrDShade":0.25,"pcrIShade":0.31932228125,"pcrQColor":"black","pcrDColor":"white","pcrIColor":"white"}];
let section_info_a = {"fullID":"CIS  110","CourseID":"CIS  110","title":"Introduction to Computer Programming","description":"Introduction to Computer Programming is the first course in our series introducing students to computer science. In this class you will learn the fundamentals of computer programming in Java, with emphasis on applications in science and engineering. You will also learn about the broader field of computer science and algorithmic thinking, the fundamental approach that computer scientists take to solving problems.","termsOffered":"One-term course offered either term","prereqs":"none","sectionCred":1,"reqsFilled":["Formal Reasoning Course","Wharton - Science and Technology","Wharton 2017 - Natural Science","SEAS - Engineering"]};
let section_info_b = {"fullID":"CIS  561 401","CourseID":"CIS  561","title":"Advanced Computer Graphics","instructor":"Adam D Mally","description":"This course is designed to provide a comprehensive overview to computer graphics techniques in 3D modeling, image synthesis, and rendering. Topics cover: geometric transformations, geometric algorithms, software systems, 3D object models (surface, volume and implicit), visible surface algorithms, image synthesis, shading, mapping, ray tracing, radiosity, global illumination, sampling, anti- aliasing, Monte Carlo path tracing, and photon mapping.","openClose":"Open","termsOffered":"One-term course offered either term","prereqs":"A working knowledge of C++ programing is required (one year programming experience in general).  Knowledge of vector geometry is usefl.","timeInfo":["1:30 to 3:00 on MW"],"associatedType":"","associatedSections":[],"sectionCred":1,"reqsFilled":["SEAS - Engineering"]};


export default class Sections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {sections: sections_data_a, sectionInfo: section_info_a};
        this.iteration = 0;
    }

    render() {
        this.iteration++;
        sectionsObj = this;
        return <div id={"SectionsContainer"}>
            <div id={"Sections"}>
                <div className="columns is-gapless"
                     style={{marginBottom: "0.6em", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap"}}>
                    <div className={"tooltip column is-one-fifth"} title={"Section status (open or closed)"}>O/C</div>
                    <div className={"PCR Inst tooltip column is-one-fifth"} title={"Instructor Quality rating"}
                         style={{background: "rgba(46, 204, 113, 0.85)"}}>
                        Inst
                    </div>
                    <div className={"tooltip column is-one-fifth"} title={"Section ID"}>Sect</div>
                    <div className={"tooltip column"} title={"Meeting Time"}>Time</div>
                </div>
                {this.state.sections && <SectionList key = {this.iteration} sections={this.state.sections}/>}
            </div>
            {this.state.sectionInfo && <SectionInfoDisplay key = {this.iteration + 1} sectionInfo={this.state.sectionInfo}/>}
        </div>;
    }

}

class SectionDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.section = this.props.section;
        this.getAddRemoveIcon = this.getAddRemoveIcon.bind(this);
        this.getPcaButton = this.getPcaButton.bind(this);
        this.getInstructorReview = this.getInstructorReview.bind(this);
        const self = this;
        this.openSection = function () {
        }
    }

    getAddRemoveIcon() {
        let className = "fa";
        const self = this;
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
        const self = this;
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
                            //$scope.justSection(this.section.idSpaced)}
                        }
                    </span>
                </div>

                <div className={"column"}>
                    <span className={"sectionText"}
                          onClick={this.openSection}>
                        {
                            //$scope.stripTime(this.section.timeInfo)}
                        }
                    </span>
                </div>
            </div>
        </li>
    }
}

class SectionList extends React.Component {

    constructor(props) {
        super(props);
        this.sections = props.sections;
    }

    render() {
        let sections = [];
        for (let i = 0; i < this.sections.length; i++) {
            let section = this.sections[i];
            /*if (($scope.showAct === section.actType || $scope.showAct === 'noFilter') &&
                (section.isOpen || $scope.showClosed) &&
                ($scope.currentCourse || $scope.starSections.indexOf(section.idDashed) > -1)) {
                sections.push(<SectionDisplay section={section} key={i}/>);
            }*/
        }

        return <div id="SectionList">
            <ul>
                {sections}
            </ul>
        </div>;
    }

}

class SectionInfoDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sectionInfo: this.props.sectionInfo};
        this.getStar = this.getStar.bind(this);
    }

    getStar(){
        let className = "fa fa-star";
        /*if($scope.starSections.indexOf($scope.currentSectionDashed) === -1){
            className += "-o";
        }*/
        return <i style={{float: "right", marginRight: "2rem", color: "gold"}}
           className={className} onClick={function () {
            //$scope.star.AddRem($scope.currentSectionDashed)
        }
        }/>
    }

    render() {
        console.log("Rendering section info");
        //const $scope = angular.element(document.body).scope();
        let timeInfoDisplay = undefined;
        if (this.state.sectionInfo.timeInfo) {
            let meetings = [];
            for (let i = 0; i < this.state.sectionInfo.timeInfo.length; i++) {
                let meeting = meetings[i];
                meetings.push(<span key={i}>
                    {meeting}
                    <br/>
                </span>);
            }
            timeInfoDisplay = <p style={{display: "block"}}>
                {meetings}
            </p>;
        }

        let requirementsDisplay = undefined;
        if (this.state.sectionInfo.reqsFilled) {
            const reqs = [];
            for (let i = 0; i < this.state.sectionInfo.reqsFilled.length; i++) {
                let req = this.state.sectionInfo.reqsFilled[i];
                reqs.push(<span key={i}>{req}<br/></span>);
            }
            requirementsDisplay = <span> Requirements Fulfilled:
                <br/>
                {reqs}
                <br/>
            </span>
        }

        let associatedSections = [];
        const self = this;
        if(this.state.sectionInfo.associatedSections) {
            for (let i = 0; i < this.state.sectionInfo.associatedSections.length; i++) {
                let associatedSection = this.state.sectionInfo.associatedSections[i];
                associatedSections.push(<li
                    key = {i}
                    id={associatedSection.replace(' ', '-').replace(' ', '-')}
                    onClick={function () {
                        //$scope.get.SectionInfo(self.state.sectionInfo.associatedSections[i].replace(" ", "-").replace(' ', '-'));
                    }}> {associatedSection} <br/></li>);
            }
            associatedSections.push(<br key = {this.state.sectionInfo.associatedSections.length + 1}/>);
        }

        return <div id="SectionInfo">
            {this.state.sectionInfo.fullID && (<p style={{fontSize: "1.25em"}}>
                {(this.state.sectionInfo.fullID + "-" + this.state.sectionInfo.title)}
                {(this.state.sectionInfo.associatedSections !== undefined) && this.getStar()}
            </p>)}
            {timeInfoDisplay}
            {this.state.sectionInfo.instructor && <p>
                {'Instructor: ' + this.state.sectionInfo.instructor}
                <br/>
                <br/>
            </p>}
            {this.state.sectionInfo.associatedSections && associatedSections}
            {this.state.sectionInfo.description && <span>Description: {this.state.sectionInfo.description} <br/><br/></span>}
            {requirementsDisplay}
            {this.state.sectionInfo.prereqs && <span> Prerequisites: {this.state.sectionInfo.prereqs} <br/><br/></span>}
            {this.state.sectionInfo.associatedType &&
            <span> You must also sign up for a {this.state.sectionInfo.associatedType}. <br/> Associated {this.state.sectionInfo.associatedType}s: <br/></span>}
            <ul>
                {associatedSections}
            </ul>
        </div>
    }
}