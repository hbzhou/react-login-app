import React from 'react'
import SignupForm from './SignupForm'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {registerUser} from '../../actions/userActions';
import {addFlashMessage} from '../../actions/flashMessageActions'


const SignupPage = ({registerUser, addFlashMessage}) => {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <SignupForm registerUser={registerUser} addFlashMessage={addFlashMessage}/>
                </div>
                <div className="col-md-3"/>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: bindActionCreators(registerUser, dispatch),
        addFlashMessage: bindActionCreators(addFlashMessage, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(SignupPage);
