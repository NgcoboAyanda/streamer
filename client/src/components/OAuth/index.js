import React, {Component} from 'react';
import { connect } from 'react-redux';

//action creators
import { signIn, signOut } from '../../actions';


class OAuth extends Component {
    state = {isSignedIn:null};

    //what happens when the app initially loads up
    componentDidMount=()=>{
        //adding conditional so that app can load up without an error msg even when the gapi script doesnt load
        if(window.gapi){
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init( {
                clientId:'274619743138-l8b82adcnp25apt7ukavllae6bki34ji.apps.googleusercontent.com',
                scope: 'email'
            }
            //The init() method returns a promise so we call .then to put a callback that will execute after init() 
            ).then( ()=> {
                //storing auth instance object in the component so that we can access it outside this method
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState( { isSignedIn:this.auth.isSignedIn.get()} );
                //method to listen for changes to the authorization state
                    //it takes a callback that will be executed when there is a change
                this.auth.isSignedIn.listen(val=>this.onAuthChange());
                } 
            );
        });
      }
    };

    //what happens when sign in state changes
    onAuthChange= (isSignedIn)=>{
        if(isSignedIn){
            this.props.signIn();
        }
        else {
            this.props.signOut();
        }
    }

    //conditional render method
    renderAuthBtn=()=>{
        if(this.state.isSignedIn === null){
            return null;
        }
        else if(this.state.isSignedIn){
            return ( 
                <button className="ui red google button" onClick={e=> this.sign('Out')}>
                    <i className="google icon"/>
                    Sign out
                </button>
            );
        }
        else if(this.state.isSignedIn === false){
            return (
                    <button className="ui red google button" onClick={e=> this.sign('In')}>
                        <i className="google icon"/>
                        Sign in with Google
                    </button>
            );
        }
    }

    //sign method is for signing in and signing out
    //takes one parameter, which can either be signIn or signOut
    sign=(param)=>{
        if(param === 'In'){
            this.auth.signIn();
        }
        if(param === 'Out'){
            this.auth.signOut();
        }
    }

    render(){
        return(
            <div className="item">
                {this.renderAuthBtn()}
            </div>
        )
    }
}
//state
const mapStateToProps = (state)=>{
    
}

//dispatch
const mapDispatchToProps = {
    signIn,
    signOut
}

export default connect(mapStateToProps,mapDispatchToProps)(OAuth);