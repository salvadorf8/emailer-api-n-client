import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import SurveyField from './SurveyField';
import validateEmails from '../../helpers/validateEmails';
import formFields from './formFields';

// preventing repetative code - did not need but still done for notes purpose
// const FIELDS = [
//     { label: 'Survey Title', name: 'title' },
//     { label: 'Subject Line', name: 'subject' },
//     { label: 'Message Body', name: 'body' },
//     { label: 'Recipient List', name: 'emails' }
// ];

class SurveyForm extends React.Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={name} name={name} label={label} type='text' component={SurveyField} />;
        });
    }

    render() {
        return (
            <div className='ui container'>
                <form className='ui form' onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                    {this.renderFields()}
                    <div className='ui secondary menu'>
                        <div className='item'>
                            <Link className='ui button' to='/surveys'>
                                Cancel
                            </Link>
                        </div>
                        <div className='right item'>
                            <button className='ui right labeled icon green button'>
                                <i className='right arrow icon' />
                                Next
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const validate = (formValues) => {
    const errors = {};

    //note: recipients is not just a name given, its the name used in formFields.js
    errors.recipients = validateEmails(formValues.recipients || '');

    // if (!formValues.title) {
    // 	errors.title = 'You must provide a title';
    // }
    // if (!formValues.subject) {
    // 	errors.subject = 'You must provide a subject';
    // }
    // if (!formValues.emails) {
    // 	errors.emails = 'You must provide a email(s)';
    // }
    // if (!formValues.body) {
    // 	errors.body = 'You must provide a body';
    // }

    // lodash .forEach is usually used because it stops if returned, vs js .forEach it loops through all
    _.forEach(formFields, ({ name }) => {
        // referencing a value at runtime, on the fly, no need to create a const or get the key, just the value on the fly
        if (!formValues[name]) {
            return (errors[name] = 'Value is required');
        }
    });

    return errors;
};

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);
