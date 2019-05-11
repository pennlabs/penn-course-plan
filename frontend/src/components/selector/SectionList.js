import React, {Component} from 'react';
import SectionDisplay from './SectionDisplay'
import {section_info_a} from "../../sections_data";

export default class SectionList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let sections = [];
        const self = this;
        const updateSectionInfo = this.props.updateSectionInfo;
        const psections = this.props.sections || [];
        console.log('davis', psections.length)
        for (let i = 0; i < psections.length; i++) {
            let section = psections[i];
            sections.push(<SectionDisplay
                inSchedule={this.props.scheduleContains(section.idDashed)}
                overlap={this.props.overlaps(section)}
                addSchedItem={this.props.addSchedItem}
                removeSchedItem={this.props.removeSchedItem}
                section={section} key={i}
                openSection={() => {
                    updateSectionInfo(section_info_a);
                }}/>);
            /*if (($scope.showAct === section.actType || $scope.showAct === 'noFilter') &&
                (section.isOpen || $scope.showClosed) &&
                ($scope.currentCourse || $scope.starSections.indexOf(section.idDashed) > -1)) {
                sections.push(<SectionDisplay section={section} key={i}/>);
            }*/
        }

        return <div id="SectionList" ref={this.props.listRef}>
            <ul>
                {sections}
            </ul>
        </div>;
    }

}