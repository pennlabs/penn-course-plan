import React, { Component } from 'react';

export default class SectionInfoDisplay extends Component {
  constructor(props) {
      super(props);
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
      if (this.props.sectionInfo.timeInfo) {
          let meetings = [];
          for (let i = 0; i < this.props.sectionInfo.timeInfo.length; i++) {
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
      if (this.props.sectionInfo.reqsFilled) {
          const reqs = [];
          for (let i = 0; i < this.props.sectionInfo.reqsFilled.length; i++) {
              let req = this.props.sectionInfo.reqsFilled[i];
              reqs.push(<span key={i}>{req}<br/></span>);
          }
          requirementsDisplay = <span> Requirements Fulfilled:
              <br/>
              {reqs}
              <br/>
          </span>
      }

      let associatedSections = [];
      if(this.props.sectionInfo.associatedSections) {
          for (let i = 0; i < this.props.sectionInfo.associatedSections.length; i++) {
              let associatedSection = this.props.sectionInfo.associatedSections[i];
              associatedSections.push(<li
                  key = {i}
                  id={associatedSection.replace(' ', '-').replace(' ', '-')}
                  onClick={function () {
                      //$scope.get.SectionInfo(self.state.sectionInfo.associatedSections[i].replace(" ", "-").replace(' ', '-'));
                  }}> {associatedSection} <br/></li>);
          }
          associatedSections.push(<br key = {this.props.sectionInfo.associatedSections.length + 1}/>);
      }

      return <div id="SectionInfo">
          {this.props.sectionInfo.fullID && (<p style={{fontSize: "1.25em"}}>
              {(this.props.sectionInfo.fullID + "-" + this.props.sectionInfo.title)}
              {(this.props.sectionInfo.associatedSections !== undefined) && this.getStar()}
          </p>)}
          {timeInfoDisplay}
          {this.props.sectionInfo.instructor && <p>
              {'Instructor: ' + this.props.sectionInfo.instructor}
              <br/>
              <br/>
          </p>}
          {this.props.sectionInfo.associatedSections && associatedSections}
          {this.props.sectionInfo.description && <span>Description: {this.props.sectionInfo.description} <br/><br/></span>}
          {requirementsDisplay}
          {this.props.sectionInfo.prereqs && <span> Prerequisites: {this.props.sectionInfo.prereqs} <br/><br/></span>}
          {this.props.sectionInfo.associatedType &&
          <span> You must also sign up for a {this.props.sectionInfo.associatedType}. <br/> Associated {this.props.sectionInfo.associatedType}s: <br/></span>}
          <ul>
              {associatedSections}
          </ul>
      </div>
  }
}