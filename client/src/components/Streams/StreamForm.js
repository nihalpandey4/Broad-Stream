import React from 'react'
import {Field,reduxForm} from "redux-form";

class StreamForm extends React.Component{

    renderError=({touched,error})=>{
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInputField=({input,label,meta})=>{
        let forErrorHandlingClassName = `field ${meta.error&&meta.touched?"error":""}`
        return (
            <div className={forErrorHandlingClassName}>
                <label>{label}</label>
                <input {...input}  />
                {this.renderError(meta)}
            </div> 
        );
    }

    render() {
        return (
            <div>
                <form className="ui form error" onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                    <Field name = "title" component ={this.renderInputField} label = "Enter Title" />
                    <Field name ="description" component ={this.renderInputField} label = "Enter Description" />
                    <button type="submit"  className = "ui button primary">Submit</button>
                </form>
            </div>
        );
    }
}

const validate  = (formValues)=>{
    let error = {};
    if(!formValues.title){
        error.title="Title cannot be empty";
    }
    if(!formValues.description){
        error.description= "Description cannot be empty";
    }
    return error;
}

export default reduxForm({
    form:"streamForm",
    validate:validate
})(StreamForm);
