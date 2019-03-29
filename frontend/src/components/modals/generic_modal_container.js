import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {closeModal, createSchedule, deleteSchedule, openModal, triggerModalAction} from "../../actions";

class ModalContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasAction: true
        };
    }


    render() {
        const isOpen = this.props.openModal != null && this.props.openModal === this.props.modalName;
        const self = this;

        const containedContent = React.Children.map(this.props.containedContent, child =>
            React.cloneElement(child, {
                existingScheduleNames: this.props.existingScheduleNames,
                triggerModalAction: this.props.triggerModalAction,
                modalActionState: this.props.modalActionState,
                createNewSchedule: this.props.createNewSchedule,
                deleteSchedule: this.props.deleteSchedule,
                close: this.props.close,
                clearAction: ()=> this.state.hasAction ? self.setState({hasAction: false}) : null,
                restoreAction: ()=> !this.state.hasAction ? self.setState({hasAction: true}) : null,
            })
        );
        return isOpen && <div className={"modal " + (isOpen ? "is-active" : "")}>
            <div className={"modal-background"}/>
            <div className={"modal-card"}>
                <header className={"modal-card-head"}>
                    <p className="modal-card-title">{this.props.title}</p>
                    <button className={"delete"} aria-label={"close"} onClick={self.props.close}/>
                </header>
                <section className="modal-card-body">
                    {containedContent}
                </section>
                <footer className={"modal-card-foot"}>

                    {this.state.hasAction && this.props.successButton && <button className={"button is-success"}
                                                                                 onClick={() => {
                                                                                     self.props.triggerModalAction("success");
                                                                                 }}>{self.props.successButton}
                    </button>}
                    <button className={"button"}
                            onClick={self.props.close}>{this.state.hasAction ? "Cancel" : "Ok"}</button>
                </footer>
            </div>
        </div>
    }

}

const mapStateToProps = (state) => ({
    openModal: state.modals.modalShown,
    existingScheduleNames: Object.keys(state.schedule.schedules),
    modalActionState: state.modals.modalAction
});

const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(closeModal()),
    open: modalName => dispatch(openModal(modalName)),
    triggerModalAction: modalAction => dispatch(triggerModalAction(modalAction)),
    createNewSchedule: name => dispatch(createSchedule(name)),
    deleteSchedule: () => dispatch(deleteSchedule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);