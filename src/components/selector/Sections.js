import React, {Component} from 'react';
import {sections_data_a, section_info_a} from '../../sections_data'
import SectionInfoDisplay from './SectionInfoDisplay'
import SectionList from './SectionList'
import {addSchedItem, removeSchedItem, updateSearch, updateSectionInfo, updateSections} from "../../actions";
import connect from "react-redux/es/connect/connect";


const mapDispatchToProps = (dispatch) => (
    {
        addSchedItem: schedItem => dispatch(addSchedItem(schedItem)),
        removeSchedItem: fullID => dispatch(removeSchedItem(fullID)),
        updateSearch: searchResults => dispatch(updateSearch(searchResults)),
        updateSections: sections => dispatch(updateSections(sections)),
        updateSectionInfo: sectionInfo => dispatch(updateSectionInfo(sectionInfo))
    }
);

const mapStateToProps = (state) => (
    {
        sectionInfo: state ? state.sections.sectionInfo : undefined,
        sections: state ? state.sections.sections : undefined,
        scheduleMeetings: state ? state.schedule.schedules[state.schedule.scheduleSelected].meetings : []
    }
);

class Sections extends Component {
    constructor(props) {
        super(props);
        const self = this;
        this.iteration = 0;
    }

    render() {
        this.iteration++;
        const self = this;
        return <div id={"SectionsContainer"}>
            <div id={"Sections"}>
                <div className="columns is-gapless"
                     style={{
                         marginBottom: "0.6em",
                         overflow: "hidden",
                         textOverflow: "ellipsis",
                         whiteSpace: "nowrap"
                     }}>
                    <div className={"tooltip column is-one-fifth"} title={"Section status (open or closed)"}>O/C</div>
                    <div className={"PCR Inst tooltip column is-one-fifth"} title={"Instructor Quality rating"}
                         style={{background: "rgba(46, 204, 113, 0.85)"}}>
                        Inst
                    </div>
                    <div className={"tooltip column is-one-fifth"} title={"Section ID"}>Sect</div>
                    <div className={"tooltip column"} title={"Meeting Time"}>Time</div>
                </div>
                {this.props.sections && <SectionList
                    sectionInfo={this.props.sectionInfo}
                    updateSectionInfo={this.props.updateSectionInfo}
                    scheduleContains={(sectionID) => {
                        return this.props.scheduleMeetings.map((section) => section.idDashed).indexOf(sectionID) !== -1
                    }}
                    key={this.iteration} sections={this.props.sections}
                    addSchedItem={this.props.addSchedItem}
                    removeSchedItem={this.props.removeSchedItem}/>}
            </div>
            {this.props.sectionInfo &&
            <SectionInfoDisplay key={this.iteration + 1} sectionInfo={this.props.sectionInfo}/>}
        </div>;
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sections);