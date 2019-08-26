import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';
import Dashboard from './Dashboard';
import { fetchUser } from '../actions';

class App extends React.Component {
	componentDidMount = () => {
		this.props.fetchUser();
	};

	render() {
		return (
			<BrowserRouter>
				<div className='ui container'>
					<Header />
					<Switch>
						<Route path='/' exact component={Landing} />
						<Route path='/Surveys/' exact component={Dashboard} />
						<Route path='/Surveys/new' exact component={SurveyNew} />
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
};

export default connect(
	mapStateToProps,
	{ fetchUser }
)(App);
