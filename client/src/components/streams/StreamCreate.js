import React, { Component } from 'react';
//redux form methods
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends Component {
    //destructuring input from fieldProps object
    renderInput=( { input } )=>{
        return <input type="text" {...input}/>;
    }

    render(){
        console.log(this.props);
        return(
            <form>
            <Field name="title" component={this.renderInput}/>
            <Field name="description" component={this.renderInput}/>
            </form>
        )
    }
}

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);