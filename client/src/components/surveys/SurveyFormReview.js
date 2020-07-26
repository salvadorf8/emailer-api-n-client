import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import formFields from './formFields';
//intresting syntax to get all actions rather than just one at a time as been done
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history, auth }) => {
    const reviewFields = _.map(formFields, ({ label, name }) => {
        return (
            <div className='item' key={name}>
                <div className='ui horizontal label'>{label}</div>
                {formValues[name]}
            </div>
        );
    });

    const confirmExistingCreditsAndSubmit = () => {
        if (auth.credits === 0) {
            return alert('Purchase credits before submitting a survey');
        }

        submitSurvey(formValues, history);
    };

    return (
        <div className='ui container'>
            <div className='ui form'>
                <h4>Please confirm your entries</h4>
                <div className='ui raised very padded text container segment'>{reviewFields}</div>
                <div className='ui secondary menu'>
                    <div className='item'>
                        <button className='ui left labeled icon green button' onClick={onCancel}>
                            <i className='left arrow icon' />
                            Back
                        </button>
                    </div>
                    <div className='right item'>
                        <button className='ui right labeled icon green button' onClick={confirmExistingCreditsAndSubmit}>
                            <i className='envelope icon' />
                            Send Survey
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return { formValues: state.form.surveyForm.values, auth: state.auth };
};

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));
