import React from "react";

import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addFlashMessage} from "../../actions/flashMessageAction";


const LoginPage = ({addFlashMessage}) => {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <LoginForm  addFlashMessage={addFlashMessage}/>
                </div>
                <div className="col-md-3"/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFlashMessage: bindActionCreators(addFlashMessage, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)
