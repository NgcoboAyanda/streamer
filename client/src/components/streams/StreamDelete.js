import React from 'react';
import { connect } from 'react-redux';

import { deleteStream, fetchStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends React.Component{
    id = this.props.match.params.streamId;
    componentDidMount(){
        this.props.fetchStream(this.id);
    }

    removeStream = ()=>{
        this.props.deleteStream(this.id);
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

    renderStreamTitle = (props)=>{
        const {stream} = props;
        let title;
        if(stream){
            title = ` "${stream.title}" `
        }
        else{
            title = ''
        }
        return title;
    }

    render() {
            return(
                <div>
                    <Modal 
                        title={'Delete Stream'}
                        confirmMsg = {`Are you sure you want to delete ${this.renderStreamTitle(this.props)} stream?`}
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