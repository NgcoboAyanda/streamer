import React, { Component } from 'react';
//redux form methods
import { Field, reduxForm } from 'redux-form';
//redux
import { connect } from 'react-redux';
import { createStream } from "../../actions";

class StreamCreate extends Component {

    //destructuring input from fieldProps object
    renderInput = ( { input, label, meta } )=>{
        //conditional to decide to show error
        const className = `field ${meta.error && meta.touched ? 'error': ''}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input type="text" {...input} autoComplete="off"/>
                {this.renderFormError(meta)}
            </div>
            )
    }

    /* When onFormSubmit is called, it will be passed an object(formValues) which contains all values in
    our form */
    onFormSubmit=(formValues)=>{
        this.props.createStream(formValues);//firing off createStream action creator
    }

    //renderFormError is called with meta object so we're destructuring error and touched from that object
    renderFormError( { error,touched } ){
        if (touched && error){
            console.log(touched,error);
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    render(){
        const {handleSubmit} = this.props;//destructuring handleSubmit method from this.props

        return(
            <form onSubmit={handleSubmit(this.onFormSubmit)} className="ui form error">
            <Field name="title" component={this.renderInput} label={"Enter title"}/>
            <Field name="description" component={this.renderInput} label={"Enter description"}/>
            <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = formValues => {
    const errors = {};

    if(!formValues.title){ //if user doesn't enter a title
        errors.title = 'You must enter a title'
    }

    if(!formValues.description){//if user doesn't enter a description
        errors.description = 'You must enter a description'
    }

    return errors; //returning error object. If it's blank then the form will be submitted
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate
})(StreamCreate);


const mapDispatchToProps = {
    createStream
};

export default connect(null, mapDispatchToProps)(formWrapped);