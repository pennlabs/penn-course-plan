import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {closeModal, createSchedule, openModal, triggerModalAction} from "../../actions";

class ModalContainer extends Component {

    render() {
        const isOpen = this.props.openModal != null && this.props.openModal === this.props.modalName;
        const self = this;
        const containedContent = React.Children.map(this.props.containedContent, child =>
            React.cloneElement(child, {
                existingScheduleNames: this.props.existingScheduleNames,
                triggerModalAction: this.props.triggerModalAction,
                modalActionState: this.props.modalActionState,
                createNewSchedule: this.props.createNewSchedule,
                close: this.props.close
            })
        );
        return <div className={"modal " + (isOpen ? "is-active" : "")}>
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

                    {self.props.successButton && <button className={"button is-success"}
                                                         onClick={() => {
                                                             self.props.triggerModalAction("success");
                                                         }}>{self.props.successButton}
                    </button>}
                    <button className={"button"} onClick={self.props.close}>Cancel</button>
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
    open: (modalName) => dispatch(openModal(modalName)),
    triggerModalAction: (modalAction) => dispatch(triggerModalAction(modalAction)),
    createNewSchedule: (name) => dispatch(createSchedule(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalContainer);