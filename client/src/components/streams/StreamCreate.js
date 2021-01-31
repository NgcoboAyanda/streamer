import React from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';
import { createStream } from '../../actions';


class StreamCreate extends React.Component{
    createStream=(formValues)=>{
        this.props.createStream(formValues);
    }

    render(){
        return(
            <div>
                <StreamForm
                    onFormSubmit = {this.createStream}
                />
            </div>
        )
    }
}

const mapDispatchToProps = {
    createStream
};

export default connect(null,mapDispatchToProps)(StreamCreate);