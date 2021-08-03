import React from "react";
import LoginForm from "./LoginForm";


const LoginPage = () => {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <LoginForm/>
                </div>
                <div className="col-md-3"/>
            </div>
        </div>
    )
}

export default LoginPage
