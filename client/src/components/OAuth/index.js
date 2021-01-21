import React, {Component} from 'react';

class OAuth extends Component {
    state = {loggedIn:null};

    signIn=()=>{
        this.auth.signIn();
    }

    //what happens when the app initially loads up
    componentDidMount=()=>{
        window.gapi.load("client:auth2",()=>{
            window.gapi.client.init( {
                clientId:'274619743138-l8b82adcnp25apt7ukavllae6bki34ji.apps.googleusercontent.com',
                scope: 'email'
            }
            //The init() method returns a promise so we call .then to put a callback that will execute after ini() 
            ).then( ()=> {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState( {loggedIn:this.auth.isSignedIn.get()} );    
                } 
            );
        });
    };

    renderAuthBtn=()=>{
        if(this.state.loggedIn){
            return (
                <div className="item">
                    Logout
                </div>
            )
        }
        else{
            return(
                <div className="item">
                    Login
                </div>
            )
        }
    }

    render(){
        return(
            <div className="item">
                {String(this.state.loggedIn)}
            </div>
        )
    }
}

export default OAuth;