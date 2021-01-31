import React from 'react';
import { connect } from 'react-redux';

import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component{
    componentDidMount(){
        this.props.fetchStream(this.props.match.params.streamId);
    }

    //<> is short for React.Fragment
    modalActions = (
        <> 
            <button className="ui button negative">
                Delete
            </button>
            <button className="ui button">
                Cancel
            </button>
        </>
    )

    modalConfig = {
        title: "Delete Stream",
        confirmMsg: `Are you sure you want to delete ${this.props.stream.title} stream?`,

        actions: this.modalActions,
        onDismiss: e=>history.push('/')
    }

    render() {
        return(
            <div>
                <Modal config={this.modalConfig}/>
            </div>
        )
    }
}

const mapDispatchToProps = {
    deleteStream,
    fetchStream
}

const mapStateToProps = (state,ownProps)=>{
    return {
        stream: state.streams[ownProps.match.params.streamId]
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StreamDelete);