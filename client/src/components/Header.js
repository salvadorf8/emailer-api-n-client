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
					<a className='ui button' href='/auth/google'>
						Login With Google
					</a>
				);
			default:
				return (
					<div>
						<Payments />
						<a className='ui button' href='/api/logout'>
							Logout With Google
						</a>
					</div>
				);
		}
	};

	render() {
		return (
			<div className='ui large secondary menu'>
				<div className='left item'>
					<Link className='ui header' to={this.props.auth ? '/surveys' : '/'}>
						<h2>Emaily</h2>
					</Link>
				</div>
				<div className='right item'>
					<div>{this.renderContent()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
