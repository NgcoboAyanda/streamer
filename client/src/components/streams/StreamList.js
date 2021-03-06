import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount=()=>{
        this.props.fetchStreams();
    }

    //conditionally rendering edit and delete stream buttons
    renderAdmin(stream) {//renderAdmin is called with object that contains userId
        const {userId,id} = stream;//getting userId and streamId
        if (userId === this.props.currentUserId){
            return(
                <div className="right floated content">
                    <Link to={`/streams/edit/${id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    renderStreamsList=()=>{
        return (
            this.props.streams.map(stream=>{
                return (
                    <div className="item" key={stream.id}>
                        {this.renderAdmin(stream)}
                        <i className="large middle aligned icon camera"/>
                        <div className="content">
                            <Link to={`/streams/${stream.id}`} className={'header'}>
                                {stream.title}
                            </Link>
                            <div className="description">{stream.description}</div>
                        </div>
                    </div>
                )
            })
        )
    }

    renderCreateButton=()=>{
        if(this.props.isSignedIn){
            return(
                <div style={ {textAlign: 'right'} }>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>  
            );
        }
    }


    render(){
        return(
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderStreamsList()}
                </div>
                {this.renderCreateButton()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return { streams: Object.values(state.streams),
             currentUserId: state.auth.userId,
             isSignedIn: state.auth.isSignedIn
           };
};

const mapDispatchToProps = {
    fetchStreams
};


export default connect(mapStateToProps,mapDispatchToProps)(StreamList);