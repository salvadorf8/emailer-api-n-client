import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

import { handleToken } from '../actions';

class Payments extends Component {
	render() {
		return (
			<StripeCheckout name='Emaily' description='$5 for 5 email credits' amount={500} token={(token) => this.props.handleToken(token)} stripeKey={process.env.REACT_APP_STRIPE_KEY}>
				<button className='ui positive button'>Add Credits</button>
			</StripeCheckout>
		);
	}
}

const mapStateToProps = (state) => {
	console.log("SF - I'm here: ", state);
	return {};
};

export default connect(
	mapStateToProps,
	{ handleToken }
)(Payments);
