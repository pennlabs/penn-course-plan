import * as React from "react";

export class OutClickable extends React.Component {
    // a component that you can "click out" of
    //requires that ref={this.setWrapperRef} is added as an attribute
    constructor(props) {
        super(props);
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
        document.addEventListener("click", this.handleClickOutside);
    }

    /**
     * Alert if clicked on outside of element
     */
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            if (this.props.allowed) {
                const allowedElements = this.props.allowed.map(id => document.getElementById(id));
                if (allowedElements.reduce((acc, item) => acc || item.contains(event.target), false)) {
                    return;
                }
            }
            this.collapse();
        }
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

}

export class Dropdown extends OutClickable {
    constructor(props) {
        super(props);
        let starting_activity = -1;
        //if props.def_active is not defined, it is assumed that the dropdown does not control
        //state and instead initiates an action
        if (props.def_active) {
            starting_activity = props.def_active;
        }
        this.state = {active: false, activity: starting_activity, label_text: props.def_text};
        this.activate_dropdown = this.activate_dropdown.bind(this);
        this.activate_item = this.activate_item.bind(this);
        this.collapse = this.collapse.bind(this);
        this.toggle_dropdown = this.toggle_dropdown.bind(this);
    }

    componentWillReceiveProps(props) {
        let starting_activity = -1;
        //if props.def_active is not defined, it is assumed that the dropdown does not control
        //state and instead initiates an action
        if (props.def_active) {
            starting_activity = props.def_active;
        }
        this.setState({activity: starting_activity, label_text: props.def_text});
    }

    collapse() {
        this.setState(state => ({active: false}));
    }

    toggle_dropdown() {
        if (this.state.active) {
            this.collapse();
        } else {
            this.activate_dropdown();
        }
    }

    activate_dropdown() {
        this.setState(state => ({active: true}));
    }

    activate_item(i) {
        this.setState(state => ({activity: i}));
        if (this.props.update_label) {
            //updates the label for the dropdown if this property is applied in JSX
            this.setState(state => ({label_text: this.props.contents[i][0]}));
        }
        this.collapse();
        //if no default activity was selected, assumes that the item in the dropdown should not remain highlighted
        //This is because if props.def_active is not defined, it is assumed that the dropdown does not control
        //state and instead initiates an action
        if (this.props.def_active === undefined) {
            this.setState(state => ({activity: -1}));
        }
    }

    render() {
        const a_list = [];
        let self = this;
        for (let i = 0; i < this.props.contents.length; i++) {
            let addition = "";
            if (this.state.activity === i) {
                addition = " is-active";
            }
            const selected_contents = this.props.contents[i];
            a_list.push(<a onClick={() => {
                if (selected_contents.length > 1) {
                    //this means that a function for onclick is provided
                    selected_contents[1]();
                }
                self.activate_item(i)
            }} className={"dropdown-item" + addition} key={i}>{selected_contents[0]}</a>);
        }
        let addition = "";
        if (this.state.active) {
            addition = " is-active";
        }
        return (
            <div id={this.props.id} ref={this.setWrapperRef} className={"dropdown" + addition}>
                <div className={"dropdown-trigger"} onClick={self.toggle_dropdown}>
                    <button className={"button"} aria-haspopup={true} aria-controls={"dropdown-menu"}>
                        <span>
                            <span className={"selected_name"}>{this.state.label_text}</span>
                            <span className="icon is-small">
                                <i className="fa fa-angle-down" aria-hidden="true"/>
                            </span>
                        </span>
                    </button>
                </div>
                <div className={"dropdown-menu"} role={"menu"}>
                    <div className={"dropdown-content"}>
                        {a_list}
                    </div>
                </div>
            </div>
        )
    }
}

class ToggleButton extends OutClickable {
    //not a dropdown itself, but interacts with adjacent elements via css
    constructor(props) {
        super(props);
        this.props = props;
        this.containerHTML = props.parent.innerHTML;
        this.state = {active: false};
        this.closeDropdown = this.closeDropdown.bind(this);
        this.activateDropdown = this.activateDropdown.bind(this);

    }

    activateDropdown() {
        this.setState(state => ({active: true}));
    }

    closeDropdown() {
        this.setState(state => ({active: false}));
    }

    render() {
        return <button ref={this.setWrapperRef}
                       className={"toggle_button " + this.state.active}>{this.props.name}</button>;
    }

}