import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    //tests this.props.auth property
    renderContent() {
        switch(this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <a href="/auth/google">Login With Google</a>
                );
            default:
            // li's if user is logged in 
                return [
                    <li key="1"><Payments /></li>,
                    <li key="3" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                     </li>,
                    <li key="2"><a href='/api/logout'>Logout</a></li> 
            ];
        }
    }

    render() {
        return(
            <nav>
                <div className="nav-wrapper">
                    <Link 
                        to={ this.props.auth ? '/surveys' : '/' }
                        className="left brand-logo">
                        Emaily
                    </Link>
                    <ul className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
// auth tells us if user is logged in or not
function mapStateToProps({ auth }) {
    // passing the auth to the Header from reducers inside index file
    return { auth };
}

export default connect(mapStateToProps)(Header);