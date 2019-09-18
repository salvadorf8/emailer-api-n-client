import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

class Dashboard extends React.Component {
    render() {
        return (
            <div className='ui container'>
                <SurveyList />
                <div className='ui right aligned container'>
                    <Link
                        className='ui circular orange icon large button'
                        to='/surveys/new'>
                        <i className='plus icon' />
                    </Link>
                </div>
            </div>
        );
    }
}

export default Dashboard;
