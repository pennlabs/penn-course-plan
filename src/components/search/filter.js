import React, {Component} from 'react';

class SearchFilter extends Component{

    render() {
        return this.props.show ? <div id="FilterSearch" className="content_dropdown box">
            <div className="FilterPanel" style={{width: "60%"}}>
                <div className="FilterBlock">
                    <div id="reqTypes">
                        <span>College</span>
                        <span>Wharton</span>
                        <span>Engineering</span>
                    </div>
                </div>
            </div>

            <div className="FilterPanel" style="width:40%;">
                <div className="FilterBlock">
                    <input type="checkbox" id="closedCheck" value="ClosedSec" checked/>
                    Show closed sections
                </div>

                <div className="FilterBlock">
                    <select id="actFilter">
                        <option value="noFilter">Filter by section type</option>
                        <option value="LEC">Lecture</option>
                        <option value="REC">Recitation</option>
                        <option value="LAB">Laboratory</option>
                        <option value="IND">Independent Study</option>
                        <option value="SEM">Seminar</option>
                        <option value="SRT">Senior Thesis</option>
                        <option value="STU">Studio</option>
                        <option value="CLN">Clinic</option>
                        <option value="PRC">SCUE Preceptorial</option>
                        <option value="PRO">NSO Proseminar</option>
                        <option value="ONL">Online Course</option>
                    </select>

                    <select id="credSelect"
                            onChange="ga('send', 'event', 'UI interaction', 'credit');">
                        <option value="noFilter">Filter by CU</option>
                        <option value="0.5">0.5 CU</option>
                        <option value="1">1 CU</option>
                        <option value="1.5">1.5 CU</option>
                    </select>
                </div>

                <div className="FilterBlock">
                    <select id="proFilter">
                        <option value="noFilter">Filter by program</option>
                        <option value="MSL">ABCS Courses</option>
                        <option value="BFS">Ben Franklin Seminars</option>
                        <option value="CGS">College of Liberal &amp; Professional Studies</option>
                        <option value="CRS">Critical Writing Seminars</option>
                        <option value="FORB">Freshman-Friendly courses</option>
                        <option value="MFS">Freshman Seminars</option>
                        <option value="PLC">Penn Language Center</option>
                        <option value="SS">Summer Sessions I &amp; II</option>
                    </select>
                </div>
            </div>
        </div> : undefined;
    }
}

const mapStateToProps = (state) => ({show : state.sections.showSearchFilter});

export default connect(mapStateToProps)(SearchFilter);