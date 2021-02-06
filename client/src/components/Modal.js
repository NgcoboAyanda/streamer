import React from 'react';
import ReactDOM from 'react-dom';

/* the Modal component is passed props to configure it*/



const Modal = (props) => {//config is destructured from props object
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={e=>e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">
                    {props.title}
                </div>
                <div className="content">
                    {props.confirmMsg}
                </div>
                <div className="actions">
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;