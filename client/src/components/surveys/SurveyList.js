import React from 'react';
import { connect } from 'react-redux';
import { deleteSurvey } from '../../actions';

class SurveyList extends React.Component {
    renderSurveys = () => {
        return this.props.surveys.reverse().map((survey) => {
            return (
                <div className='ui cards' key={survey._id}>
                    <div className='ui fluid raised card'>
                        <div className='content'>
                            <div className='right floated'>Sent On: {new Date(survey.dateSent).toLocaleDateString()}</div>
                            <div className='header'>{survey.title}</div>
                            <div className='description'>{survey.body}</div>
                        </div>
                        <div className='extra content'>
                            {survey.yes >= 1 ? <div className='ui label green'>Yes: {survey.yes}</div> : <div className='ui label'>Yes: {survey.yes}</div>}
                            {survey.no >= 1 ? <div className='ui label red'>No: {survey.no}</div> : <div className='ui label'>No: {survey.no}</div>}
                            <div className='ui circular green icon medium right floated button' onClick={() => this.props.deleteSurvey(survey)}>
                                <i className='minus icon' />
                            </div>
                        </div>
                    </div>
                </div>
            );
        });
    };

    render() {
        return <div>{this.renderSurveys()}</div>;
    }
}

export default connect(null, { deleteSurvey })(SurveyList);
