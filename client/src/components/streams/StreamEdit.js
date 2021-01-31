import React from 'react';
import { connect } from 'react-redux';

import { fetchStream,editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component{
    streamId = this.props.match.params.streamId;

    componentDidMount(){
        this.props.fetchStream(this.streamId);
    }

    onSubmit=(formValues)=>{//onSubmit will be called with the current form values
        this.props.editStream(this.streamId,formValues);//dispatching edit option
    }

    render=()=>{
        const {stream} = this.props;

        if(!stream){
            return(
                <div>
                    loading..
                </div>
            )
        }
        else{
            return(
                <div>
                    <h3>Edit stream</h3>
                    <StreamForm 
                        onFormSubmit={this.onSubmit}
                        initialValues={{title: stream.title,description:stream.description}}//this will insert the selected stream values into the form
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = (state, ownProps)=>{
    return {stream: state.streams[ownProps.match.params.streamId]};
}

const mapDispatchToProps = {
    editStream,
    fetchStream
}

export default connect(mapStateToProps,mapDispatchToProps)(StreamEdit);