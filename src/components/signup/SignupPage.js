import React from 'react'
import SignupForm from './SignupForm'


const SignupPage = () => {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <SignupForm/>
                </div>
                <div className="col-md-3"/>
            </div>
        </div>
    )
}
export default SignupPage;
