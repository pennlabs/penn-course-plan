import React, { Component } from 'react';
import {sections_data_a, section_info_a} from '../../sections_data'
import SectionInfoDisplay from './SectionInfoDisplay'
import SectionList from './SectionList'


export default class Sections extends Component {
  constructor(props) {
      super(props);
      this.state = {sections: sections_data_a, sectionInfo: section_info_a};
      this.iteration = 0;
  }

  render() {
      this.iteration++;
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