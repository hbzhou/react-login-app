import React, {useEffect, useState} from 'react'
import {Link, Route} from 'react-router-dom'
import App from './App';
import SignupPage from './signup/SignupPage';
import FlashMessageList from "./flash/FlashMessageList";
import LoginPage from "./login/LoginPage";
import UserList from "./users/UserList";
import userService from "../services/userService";
import authService from "../services/authService";
import Profile from "./users/Profile";

const NavigationBar = () => {

    const [currentUser, setCurrentUser] = useState(undefined)

    useEffect(() => {
        const currentUser = userService.getCurrentUser();
        if (currentUser) {
            setCurrentUser(currentUser)
        }
    }, []);

    const logout = () => {
        authService.logout()
    }


    return (
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to="/" className="navbar-brand">App page</Link>
                <div className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link">Home page</Link>
                    </li>
                </div>
                {currentUser ?
                    (<div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">{currentUser.name}</Link>
                        </li>
                        <li className="nav-item">
                            <a href="/login" className="nav-link" onClick={logout}>Logout</a>
                        </li>
                    </div>) :
                    (<div className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Sign up</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className="nav-link">Login</Link>
                        </li>
                    </div>)
                }
            </nav>
            <FlashMessageList/>
            <div className="container mt-3">
                <Route exact path="/" component={App}/>
                <Route path="/signup" component={SignupPage}/>
                <Route path="/login" component={LoginPage}/>
                <Route path="/users" component={UserList}/>
                <Route path="/profile" component={Profile}/>
            </div>
        </div>
    )

}

export default NavigationBar;
