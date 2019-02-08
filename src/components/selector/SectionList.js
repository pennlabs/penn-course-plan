import React, {Component} from 'react';
import SectionDisplay from './SectionDisplay'

export default class SectionList extends Component {
    render() {
        let sections = [];
        const self = this;
        const updateSectionInfo = this.props.updateSectionInfo;
        for (let i = 0; i < this.props.sections.length; i++) {
            let section = this.props.sections[i];
            sections.push(<SectionDisplay
                inSchedule={this.props.scheduleContains(section.idDashed)}
                addSchedItem={this.props.addSchedItem}
                removeSchedItem={this.props.removeSchedItem}
                section={section} key={i}
                openSection={() => {
                    updateSectionInfo(section);
                }}/>);
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