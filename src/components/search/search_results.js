import * as React from "react";
import {SearchResult} from "./search_result";

let searchResultsPane = null;

let offset = 0;

export class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        this.state = {searchResults: []};
        searchResultsPane = this;
    }

    render() {
        console.log("Re-rendering");
        let items = [];
        for (let i = 0; i < this.state.searchResults.length; i++) {
            const searchResult = this.state.searchResults[i];
            // todo: requirements stuff
            const searchResultComponent = <SearchResult key={i + offset} course={searchResult}>
            </SearchResult>;
            items.push(searchResultComponent);
        }
        offset += this.state.searchResults.length;
        return <div id={"CourseList"} className={"box column"}>
            <div id="CourseHeader">
                <span className={"PCR Qual tooltip ng-scope"}
                      style={{background: "rgba(45, 160, 240, 0.85)", marginLeft: "0.45em"}}> Qual </span>
                <span className={"PCR Diff tooltip ng-scope"}
                      style={{background: "rgba(231, 76, 60, 0.85)"}}>Diff</span>
                <span>Sort by: </span>
                <select id={"sortCourses"} style={{marginBottom: "0.5em"}}
                        className={"ng-pristine ng-untouched ng-valid ng-not-empty"}>
                    <option value={"idDashed"} selected={"selected"}>Course Number</option>
                    <option value={"-revs.cQ"}>Quality (high to low)</option>
                    <option value={"revs.cD"}>Difficulty (easy to hard)</option>
                    <option value={"-revs.QDratio"}>Good and Easy</option>
                </select>
            </div>
            <ul>{items}</ul>
        </div>;
    }


}