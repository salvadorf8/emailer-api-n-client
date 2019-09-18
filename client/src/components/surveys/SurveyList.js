import React from 'react';
import { connect } from 'react-redux';

import { fetchSurveys } from '../../actions';

class SurveyList extends React.Component {
    componentDidMount = () => {
        this.props.fetchSurveys();
    };

    renderSurveys = () => {
        return this.props.surveys.reverse().map((survey) => {
            return (
                <div className='ui cards' key={survey._id}>
                    <div className='ui fluid raised card'>
                        <div className='content'>
                            <div className='right floated'>
                                Sent On:{' '}
                                {new Date(survey.dateSent).toLocaleDateString()}
                            </div>
                            <div className='header'>{survey.title}</div>
                            <div className='description'>{survey.body}</div>
                        </div>
                        <div className='extra content'>
                            <div className='ui label'> Yes: {survey.yes}</div>
                            <div className='ui label'>No: {survey.no}</div>
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

const mapStateToProps = ({ surveys }) => {
    return { surveys };
};

export default connect(
    mapStateToProps,
    { fetchSurveys }
)(SurveyList);
