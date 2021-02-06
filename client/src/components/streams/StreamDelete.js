import React from 'react';
import { connect } from 'react-redux';

import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component{
    streamId = this.props.match.params.streamId;
    componentDidMount(){
        this.props.fetchStream(this.streamId);
    }

    removeStream = ()=>{
        this.props.deleteStream(this.streamId);
    }

    dismissModal = ()=>{
        history.push('/');
    }

    //<> is short for React.Fragment
    modalActions = (
        <> 
            <button className="ui button negative" onClick={this.removeStream}>
                Delete
            </button>
            <button className="ui button" onClick={this.dismissModal}>
                Cancel
            </button>
        </>
    )


    render() {
        const {stream} = this.props;

        if(!stream){
            return(
                <div>
                    loading...
                </div>
            )
        }

            return(
                <div>
                    <Modal 
                        title={'Delete Stream'}
                        confirmMsg = {`Are you sure you want to delete ${stream.title} stream?`}
                        actions = {this.modalActions}
                        onDismiss = {this.dismissModal}
                    />
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