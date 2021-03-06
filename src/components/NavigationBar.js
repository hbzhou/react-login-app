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
import Home from "./home/Home";
import Home2 from "./home/Home2";
import Home1 from "./home/Home1";
import Home4 from "./home/Home4";
import Home5 from "./home/Home5";

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
                    <li className="nav-item">
                        <Link to="/home1" className="nav-link">Home1 page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/home2" className="nav-link">Home2 page</Link>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <Link to="/home3" className="nav-link">Home3 page</Link>*/}
                    {/*</li>*/}
                    <li className="nav-item">
                        <Link to="/home4" className="nav-link">Home4 page</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/home5" className="nav-link">Home5 page</Link>
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
                <Route path = "/home" component={Home}/>
                <Route path = "/home1" component={Home1}/>
                <Route path = "/home2" component={Home2}/>
                {/*<Route path = "/home3" component={Home3}/>*/}
                <Route path = "/home4" component={Home4}/>
                <Route path = "/home5" component={Home5}/>
            </div>
        </div>
    )

}

export default NavigationBar;
