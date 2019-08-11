import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
	renderContent = () => {
		switch (this.props.auth) {
			case null:
				return <div className='ui button'>Logged out</div>;
			case false:
				return (
					<a className='ui item' href='/auth/google'>
						Login With Google
					</a>
				);
			default:
				return (
					<div className='right item'>
						<div>
							<Payments />
						</div>
						<div className='item'>
							credits:
							<div className='ui medium green label'>{this.props.auth.credits}</div>
						</div>
						<div>
							<a className='link item' href='/api/logout'>
								Logout
							</a>
						</div>
					</div>
				);
		}
	};

	render() {
		return (
			<div className='ui orange inverted large secondary menu'>
				<div className='left item'>
					<Link className='item' to={this.props.auth ? '/surveys' : '/'}>
						<h2>Emaily</h2>
					</Link>
				</div>
				{this.renderContent()}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log('header.js mapStateToProps: ', state);
	return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
