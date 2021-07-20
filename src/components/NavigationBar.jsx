import React from 'react'
import {Link, Route} from 'react-router-dom'
import App from './App';
import SignupPage from './signup/SignupPage';
import FlashMessageList from "./flash/FlashMessageList";
import LoginPage from "./login/LoginPage";

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/" className="navbar-brand">App page</Link>
                            <Link to="/signup" className="navbar-brand">Sign up</Link>
                            <Link to="/login" className="navbar-brand">Login</Link>
                        </div>
                    </div>
                </nav>
                <FlashMessageList/>
                <div className="container">
                    <Route exact path="/" component={App}/>
                    <Route path="/signup" component={SignupPage}/>
                    <Route path="/login" component={LoginPage}/>
                </div>
            </div>
        )

    }
}

export default NavigationBar;
