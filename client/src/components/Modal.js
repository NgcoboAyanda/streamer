import React from 'react';
import ReactDOM from 'react-dom';

/* the Modal component is passed a config object that looks like this

 {
    TITLE:  The title here,
    CONFIRM-MSG:  The msg that asks if you want to continue,
    ACTION:  Jsx that renders action buttons,
    ON-DISMISS: Function to do something when user dismisses modal
 }
*/

const Modal = ({config}) => {//config is destructured from props object
    return ReactDOM.createPortal(
        <div onClick={config.onDismiss} className="ui dimmer modals visible active">
            <div onClick={e=>e.stopPropagation()} className="ui standard modal visible active">
                <div className="header">
                    {config.title}
                </div>
                <div className="content">
                    {config.confirmMsg}
                </div>
                <div className="actions">
                    {config.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
}

export default Modal;