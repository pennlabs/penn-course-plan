import * as React from "react";
import {SearchResult} from "./search_result";
import connect from "react-redux/es/connect/connect";

let searchResultsPane = null;

let offset = 0;

class SearchResults extends React.Component {

    constructor(props) {
        super(props);
        searchResultsPane = this;
    }

    render() {
        let items = [];
        console.log("SEARCH RESULTS IN PROPS", this.props.searchResults);
        for (let i = 0; i < this.props.searchResults.length; i++) {
            const searchResult = this.props.searchResults[i];
            // todo: requirements stuff
            const searchResultComponent = <SearchResult key={i + offset} course={searchResult}>
            </SearchResult>;
            items.push(searchResultComponent);
        }
        offset += this.props.searchResults.length;
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

const mapStateToProps = (state) => (
    {
        searchResults: state.sections.searchResults
    }
);
export default connect(mapStateToProps)(SearchResults);
