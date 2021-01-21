import React, {Component} from 'react';

class OAuth extends Component {
    state = {isSignedIn:null};

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
                this.setState( { isSignedIn:this.auth.isSignedIn.get()} );
                console.log(this.state.isSignedIn);
                //method to listen for changes to the authorization state
                    //it takes a callback that will be executed when there is a change
                this.auth.isSignedIn.listen(val=>this.onAuthChange());
                } 
            );
        });
    };

    //what happens when authorization state changes
    onAuthChange=()=>{
        //updating state to show new sign in state
        this.setState(  { isSignedIn: window.gapi.auth2.getAuthInstance().isSignedIn.get() }  );
    }

    //conditional render method
    renderAuthBtn=()=>{
        if(this.state.isSignedIn === null){
            return <div>...</div>
        }
        else if(this.state.isSignedIn){
            return ( 
                <div>
                    <button onClick={e=> this.authorize('signOut')}>
                        Logout
                    </button>
                </div>
            )
        }
        else if(this.state.isSignedIn === false){
            return (
                <div>
                    <button onClick={e=> this.authorize('signIn')}>
                        Login
                    </button>
                </div>
            )
        }
    }

    //authorize method is for signing in and signing out
    authorize=(param)=>{
        const auth = window.gapi.auth2.getAuthInstance();
        if(param === 'signIn'){
            auth.signIn();
        }
        if(param === 'signOut'){
            auth.signOut();
        }
        //listening for changes to signed in state
        auth.isSignedIn.listen(val=>this.onAuthChange());
    }

    render(){
        return(
            <div className="item">
                {this.renderAuthBtn()}
            </div>
        )
    }
}

export default OAuth;