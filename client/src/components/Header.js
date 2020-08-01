import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return <div className='ui item'>API Server Not Running</div>;
            case false:
                return (
                    <div className='right menu'>
                        <div className='ui item'>
                            <a href='/auth/google'>Login With Google</a>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className='right menu'>
                        <div className='item'>
                            <Payments credits={this.props.auth.credits} />
                        </div>
                        <div className='ui item'>
                            <a href='/api/logout'>Logout</a>
                        </div>
                    </div>
                );
        }
    };

    render() {
        return (
            <div className='ui orange inverted large secondary menu'>
                <Link className='item' to={this.props.auth ? '/surveys' : '/'}>
                    <h2>SURVEY&#9997;GEN.net</h2>
                </Link>
                {this.renderContent()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth };
};

export default connect(mapStateToProps)(Header);
