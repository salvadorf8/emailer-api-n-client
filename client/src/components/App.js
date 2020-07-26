import './app.styles.scss';

import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';
import Dashboard from './Dashboard';
import Footer from './Footer';
import { fetchUser } from '../actions';

class App extends React.Component {
    componentDidMount = () => {
        this.props.fetchUser();
    };

    render() {
        return (
            <div className='site'>
                <div className='ui site-content'>
                    <BrowserRouter>
                        <Header />
                        <Switch>
                            <Route path='/' exact render={() => (this.props.auth ? <Redirect to='/Surveys' /> : <Landing />)} />
                            <Route path='/Surveys/' exact component={Dashboard} />
                            <Route path='/Surveys/new' exact component={SurveyNew} />
                        </Switch>
                    </BrowserRouter>
                </div>
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps, { fetchUser })(App);
