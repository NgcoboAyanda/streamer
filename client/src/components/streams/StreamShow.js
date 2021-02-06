import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchStream } from '../../actions';

class StreamShow extends Component{
    streamId = this.props.match.params.streamId;

    componentDidMount(){
        this.props.fetchStream(this.streamId);
    }


    render(){
        const {stream} = this.props;
        if(!stream){
            return <div>Loading...</div>
        }

        const {title,description} = stream;
        return(
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        )
    } 
};

const mapDispatchToProps = {
    fetchStream
}

const mapStateToProps = (state,ownProps) =>{
    return {
        stream: state.streams[ownProps.match.params.streamId]
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(StreamShow);