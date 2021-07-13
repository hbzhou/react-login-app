
import React from 'react'
import SignupForm from './SignupForm'

export default class SignupPage extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
               <SignupForm />
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    )
  }

}
