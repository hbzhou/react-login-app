import React from "react";

import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {login} from "../../actions/userActions";
import {bindActionCreators} from "redux";
import {addFlashMessage} from "../../actions/flashMessageActions";


const LoginPage = ({login, addFlashMessage}) => {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <LoginForm login={login} addFlashMessage={addFlashMessage}/>
                </div>
                <div className="col-md-3"/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: bindActionCreators(login, dispatch),
        addFlashMessage: bindActionCreators(addFlashMessage, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)