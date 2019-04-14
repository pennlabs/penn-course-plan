import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {
    clearSchedule,
    closeModal,
    createSchedule,
    deleteSchedule,
    duplicateSchedule,
    openModal,
    renameSchedule,
    triggerModalAction
} from "../../actions";

/**
 * A generic container for modals
 * Pass in one or more components as the containedContent prop that will be displayed within the modal container
 */
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
            // provides all necessary functionality to contents of modal
            React.cloneElement(child, {
                existingScheduleNames: this.props.existingScheduleNames,
                triggerModalAction: this.props.triggerModalAction,
                modalActionState: this.props.modalActionState,
                createNewSchedule: this.props.createNewSchedule,
                deleteSchedule: this.props.deleteSchedule,
                renameSchedule: this.props.renameSchedule,
                duplicateSchedule: this.props.duplicateSchedule,
                clearSchedule: this.props.clearSchedule,
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

ModalContainer.propTypes = {
    // The name of the modal this container is used for; should be consistent with the name used in Redux state
    modalName: PropTypes.string,
    // The text contained within the success button. There will be no success button if this is set to undefined.
    successButton: PropTypes.string,
    // The components to display within the modal. Should be an array of components or an individual component
    // TODO: replace this with the more standard 'children' prop
    containedContent: undefined,
    // The following props are set through React-Redux and should not be set elsewhere
    openModal: PropTypes.string,
    triggerModalAction: PropTypes.func,
    close: PropTypes.func
};



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
    renameSchedule: name => dispatch(renameSchedule(name)),
    duplicateSchedule: name => dispatch(duplicateSchedule(name)),
    clearSchedule: () => dispatch(clearSchedule()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);