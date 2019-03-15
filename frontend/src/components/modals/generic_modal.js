import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import {closeModal, openModal} from "../../actions";


class GenericModal extends Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
    }

    render() {
        const isOpen = this.props.openModal != null && this.props.openModal === this.props.modalName;
        const self = this;
        return <div className={"modal " + (isOpen ? "is-active" : "")}>
            <div className={"modal-background"}/>
            <div className={"modal-card"}>
                <header className={"modal-card-head"}>
                    <p className="modal-card-title">this.props.title</p>
                    <button className={"delete"} aria-label={"close"} onClick={
                        () => {
                            self.props.close();
                        }
                    }/>
                </header>
                <section className="modal-card-body">
                    self.props.modalContent
                </section>
                <footer className={"modal-card-foot"}>

                    <button className={"button is-success"} onClick={self.props.onSuccess}>self.props.successButton
                    </button>
                    <button className={"button"} onClick={self.close}>Cancel</button>
                </footer>
            </div>
        </div>
    }

}

const mapStateToProps = (state) => ({openModal: state.modals.modalShown});
const mapDispatchToProps = (dispatch) => ({
    close: () => dispatch(closeModal()),
    open: (modalName) => dispatch(openModal(modalName))
});
export default connect(mapStateToProps, mapDispatchToProps)(GenericModal);