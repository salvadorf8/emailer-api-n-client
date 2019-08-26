import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

import formFields from './formFields';
//intresting syntax to get all actions rather than just one at a time as been done
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
    const reviewFields = _.map(formFields, ({ label, name }) => {
        return (
            <div className='field' key={name}>
                <label>{label}</label>
                <div>{formValues[name]}</div>
            </div>
        );
    });

    return (
        <div className='ui fluid form'>
            <h5>Please confirm your entries</h5>

            {reviewFields}

            <div className='ui secondary menu'>
                <div className='item'>
                    <button
                        className='ui right labeled icon teal button'
                        onClick={onCancel}>
                        <i className='left arrow icon' />
                        Back
                    </button>
                </div>
                <div className='right item'>
                    <button
                        className='ui right labeled icon teal button'
                        onClick={() => submitSurvey(formValues)}>
                        <i className='envelope icon' />
                        Send Survey
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { formValues: state.form.surveyForm.values };
};

export default connect(
    mapStateToProps,
    actions
)(SurveyReview);
