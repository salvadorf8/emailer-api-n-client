import React from 'react';

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

export default SurveyList;
