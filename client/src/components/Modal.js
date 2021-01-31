import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history';

/* the Modal component is passed a config object that looks like this

 const config = {
                    title: the title here,
                    confirmMsg: the msg that asks if you want to continue,
                    action: jsx that renders action buttons (in this case, delete and cancel)
                 }
*/

const Modal = ({config}) => {//config is destructured from props object
    return ReactDOM.createPortal(
        <div onClick={()=>history.push('/')} className="ui dimmer modals visible active">
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