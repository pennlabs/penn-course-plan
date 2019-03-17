import React, {Component} from 'react';
import {OutClickable} from "../dropdown";
import connect from "react-redux/es/connect/connect";

class SummaryDropdown extends OutClickable {
    constructor(props) {
        super(props);
        this.collapse = this.collapse.bind(this);
        this.toggle_dropdown = this.toggle_dropdown.bind(this);
        this.state = {active: false};
    }

    collapse() {
        this.setState({active: false});
    }

    activate_dropdown() {
        this.setState({active: true});
    }

    toggle_dropdown() {
        if (this.state.active) {
            this.collapse();
        } else {
            this.activate_dropdown();
        }
    }

    render() {
        

        let addition = "";
        if (this.state.active) {
            addition = " is-active";
        }
        console.log(this.state.active);

        return (
            <div className={"dropdown is-right" + addition} ref={this.setWrapperRef}>
                <div className={"dropdown-trigger"} onClick={this.toggle_dropdown}>
                    <button className={"button"} aria-haspopup={true} aria-controls={"dropdown-menu"}>
                        <span>
                            <span className={"selected_name"}>Summary</span>
                            <span className="icon is-small">
                                <i className="fa fa-angle-down" aria-hidden="true"/>
                            </span>
                        </span>
                    </button>
                </div>
                <div className="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                        Stats here!
                    </div>
                </div>
                

            </div>

        )
    }

    
} 

export default SummaryDropdown;
