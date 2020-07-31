import './survey-form-review.styles.scss';

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
            return alert('Credits are required before submitting a survey.  Purchase using this test credit card 4242 4242 4242 4242 - 123');
        }

        submitSurvey(formValues, history);
    };

    return (
        <div className='ui container'>
            <div className='ui form'>
                <h4>Please confirm your entries</h4>
                <div className='ui raised very padded text container segment'>
                    {
                        <div className='ui equal width center aligned padded grid'>
                            <div className='row '>
                                <div className='sixteen wide column'>
                                    <div className='ui  grid'>
                                        <div className='two column row '>
                                            <div className='two wide column left aligned'>
                                                <img className='ui avatar image' />
                                            </div>
                                            <div className='fourteen wide column left aligned '>
                                                <div className=' row'>
                                                    <div className='column'>from: no-reply@surveygen.net</div>
                                                </div>
                                                <div className=' row'>
                                                    <div className='column'>subject: {formValues.subject}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className=' column'>
                                    <img src='https://images.unsplash.com/photo-1543118141-8598f6bfbc0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80' width='260' height='390' border='0' alt='' />
                                </div>
                                <div className=' column'>
                                    <div className='ui equal width center aligned padded grid'>
                                        <div className=' row'>
                                            <div className='column'></div>
                                        </div>
                                        <div className=' row'>
                                            <div className='column'>
                                                <div className='h2'>{formValues.title}</div>
                                            </div>
                                        </div>
                                        <div className=' row'>
                                            <div className='column'>
                                                <div className='text'>{formValues.body}</div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className=' column'>
                                                <div className='text-button'>
                                                    <div className='link-white'>
                                                        <span className='link-white'>YES</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className=' column'>
                                                <div className='text-button'>
                                                    <div className='link-white'>
                                                        <span className='link-white'>NO</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
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
