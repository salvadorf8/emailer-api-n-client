import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// takes two arguments, root component, and where we are rendering
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#root')
);

// this is how you access your environment variables
// console.log('Stripe key is: ', process.env.REACT_APP_STRIPE_KEY);
// console.log('Environment is: ', process.env.NODE_ENV);
