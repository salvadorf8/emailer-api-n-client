import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends React.Component {
    renderContent = () => {
        switch (this.props.auth) {
            case null:
                return <div className='ui item'>Logged out</div>;
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
                            <Payments />
                        </div>
                        <div className='item'>
                            credits:
                            <div className='ui medium green label'>
                                {this.props.auth.credits}
                            </div>
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
                    <h2>AskYourBuddies.net</h2>
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
