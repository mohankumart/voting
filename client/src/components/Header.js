import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                console.log('still......');
                return;
            case false:
                console.log('still......');
                return (
                    <li>
                        <a href='/auth/google'>LOGIN WITH GOOGLE</a>
                    </li>
                );
            default:
                console.log('loaded....');
                return (
                    <li>
                        <a href='/api/logout'>Logout</a>
                    </li>
                );
        }
    }

    render() {
        return (
            <nav>
                <div className='nav-wrapper'>
                    <Link
                        to={this.props.auth ? '/surveys' : '/'}
                        className='brand-logo'
                    >
                        Mohan
                    </Link>
                    <ul className='right'>{this.renderContent()}</ul>
                </div>
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth,
    };
}

export default connect(mapStateToProps)(Header);
