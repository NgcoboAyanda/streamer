import React from 'react';
import { connect } from 'react-redux';

import { deleteStream } from '../../actions';
import Modal from '../Modal';

const StreamDelete = (props)=>{
    //<> is short for React.Fragment
    const modalActions = (
        <> 
            <button className="ui button negative">
                Delete
            </button>
            <button className="ui button">
                Cancel
            </button>
        </>
    )

    const modalConfig = {
        title: "Delete Stream",
        confirmMsg: "Are you sure you want to delete this stream?",
        actions: modalActions
    }

    return(
        <div>
           <Modal config={modalConfig}/>
        </div>
    )
};

export default connect(null,{deleteStream})(StreamDelete);