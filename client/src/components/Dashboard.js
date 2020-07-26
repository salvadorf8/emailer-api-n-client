import './dashboard.styles.scss';

import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';
import { connect } from 'react-redux';

import { fetchSurveys } from '../actions';
import Pagination from './Pagination';

class Dashboard extends React.Component {
    state = { currentPage: 1, surveysPerPage: 6 };

    componentDidMount = () => {
        this.props.fetchSurveys();
    };

    handlePaginate = (pageNumber) => {
        this.setState({ currentPage: pageNumber });
    };

    render() {
        const { currentPage, surveysPerPage } = this.state;
        const indexOfLastSurvey = currentPage * surveysPerPage; // 2 * 6
        const indexOfFirstSurvey = indexOfLastSurvey - surveysPerPage; // 12 - 6
        const surveysOnPage = this.props.surveys.slice(indexOfFirstSurvey, indexOfLastSurvey);

        return (
            <div className='ui container'>
                <div className='ui secondary menu'>
                    <div className='item'>
                        <span className='ui label'>Use the following test credit card:</span>
                        <span className='ui label'>CC:</span>
                        <span className='ui item'>4242 4242 4242 4242</span>
                        <span className='ui label'>CW:</span>
                        <span className='ui item'>123</span>
                    </div>
                </div>

                <div className='ui secondary menu'>
                    <div className='item'>
                        <span className='ui label'>Total Submitted Surveys:</span>
                        <span className='ui item'>{this.props.surveys.length}</span>

                        <Pagination surveysPerPage={surveysPerPage} totalSurveys={this.props.surveys.length} handlePaginate={this.handlePaginate} />
                    </div>
                    <div className='right item'>
                        <Link className='ui circular green icon medium right floated button' to='/surveys/new'>
                            <i className='plus icon' />
                        </Link>
                    </div>
                </div>

                <SurveyList surveys={surveysOnPage} />
            </div>
        );
    }
}

const mapStateToProps = ({ surveys }) => {
    return { surveys };
};

export default connect(mapStateToProps, { fetchSurveys })(Dashboard);
