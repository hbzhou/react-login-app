import React from 'react'
import { Link, Route } from 'react-router-dom'
import App from './App';
import SignupPage from './signup/SignupPage';

class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <nav clclassNameass="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <Link to="/signup" className="navbar-brand">Sign up page</Link>
              <Link to="/" className="navbar-brand">App page</Link>
            </div>
          </div>
        </nav>
        <div className="container">
          <Route exact path="/" component={App}></Route>
          <Route path="/signup" component={SignupPage}></Route>
        </div>
      </div >
    )

  }
}

export default NavigationBar;
