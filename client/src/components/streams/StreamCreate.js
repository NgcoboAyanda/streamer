import React from 'react';
import { connect } from 'react-redux';

import StreamForm from './StreamForm';
import { createStream } from '../../actions';

class StreamCreate extends React.Component{

    render(){
        return(
            <div>
                <StreamForm
                    onSubmit = {this.props.createStream}
                />
            </div>
        )
    }
}

const mapDispatchToProps = {
    createStream
};

export default connect(null,mapDispatchToProps)(StreamCreate);