import React from 'react'
import {Link, Route} from 'react-router-dom'
import App from './App';
import SignupPage from './signup/SignupPage';
import FlashMessageList from "./flash/FlashMessageList";

class NavigationBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link to="/signup" className="navbar-brand">Sign up page</Link>
                            <Link to="/" className="navbar-brand">App page</Link>
                        </div>
                    </div>
                </nav>
                <FlashMessageList/>
                <div className="container">
                    <Route exact path="/" component={App}/>
                    <Route path="/signup" component={SignupPage}/>
                </div>
            </div>
        )

    }
}

export default NavigationBar;
