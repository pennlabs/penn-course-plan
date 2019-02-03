import React, {Component} from 'react';
import {sections_data_a, section_info_a} from '../../sections_data'
import SectionInfoDisplay from './SectionInfoDisplay'
import SectionList from './SectionList'
import {addSchedItem, removeSchedItem, updateSearch, updateSectionInfo, updateSections} from "../../actions";
import connect from "react-redux/es/connect/connect";


const mapDispatchToProps = (dispatch) => (
    {
        addSchedItem: schedItem => dispatch(addSchedItem(schedItem)),
        removeSchedItem: schedItem => dispatch(removeSchedItem(schedItem)),
        updateSearch: searchResults => dispatch(updateSearch(searchResults)),
        updateSections: sections => dispatch(updateSections(sections)),
        updateSectionInfo: sectionInfo => dispatch(updateSectionInfo(sectionInfo))
    }
);

const mapStateToProps = (state) => (
    {
        sectionInfo: state? state.sectionInfo : undefined,
        sections: state? state.sections: undefined
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
                {this.props.sections && <SectionList key={this.iteration} sections={this.props.sections}
                                               onSectionClicked={(sectionInfo) => {
                                                   self.setState({sectionInfo: sectionInfo})
                                               }}/>}
            </div>
            {this.props.sectionInfo && <SectionInfoDisplay key={this.iteration + 1} sectionInfo={this.props.sectionInfo}/>}
        </div>;
    }

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sections);