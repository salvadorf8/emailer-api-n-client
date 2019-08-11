import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
	render() {
		return (
			<div className='ui container'>
				Dashboard
				<div className='ui right aligned container'>
					<Link className='ui circular orange icon large button' to='/surveys/new'>
						<i class='plus icon' />
					</Link>
				</div>
			</div>
		);
	}
}

export default Dashboard;
