import * as React from "react";

export class SearchResult extends React.Component {

    constructor(props) {
        super(props);
        this.course = props.course;
    }

    render() {
        return <li id={this.course.idDashed}
                   onClick={() => {
                   }}>

            <span className="PCR Qual"
                  style={{
                      background: "rgba(45, 160, 240, " + this.course.pcrQShade + ")",
                      color: this.course.pcrQColor
                  }}>
                {this.props.course.revs.cQT}
            </span>

            <span className="PCR Diff"
                  style={{
                      background: "rgba(231, 76, 60, " + this.course.pcrDShade + ")",
                      color: this.course.pcrDColor
                  }}>
                {this.props.course.revs.cDT}
            </span>

            <span className="cID">
                {this.props.course.idSpaced}
            </span>

            <span className="cTitle">
                {this.props.course.courseTitle}
            </span>

        </li>
    }

}