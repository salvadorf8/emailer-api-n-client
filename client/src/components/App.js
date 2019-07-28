import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import SurveyNew from './SurveyNew';
import Dashboard from './Dashboard';
import { fetchUser } from '../actions';

class App extends React.Component {
	componentDidMount = () => {
		console.log('componentDidMount in App.js: ');
		this.props.fetchUser();
	};

	render() {
		return (
			<div className='ui container'>
				<BrowserRouter>
					<div>
						<Header />
						<Switch>
							<Route path='/' exact component={Landing} />
							<Route path='/Surveys/' exact component={Dashboard} />
							<Route path='/Surveys/new' exact component={SurveyNew} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('App.js mapStateToProps: ', state);
	return { auth: state.auth };
};

export default connect(
	mapStateToProps,
	{ fetchUser }
)(App);
