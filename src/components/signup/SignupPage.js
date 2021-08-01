import React from 'react'
import SignupForm from './SignupForm'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {addFlashMessage} from '../../actions/flashMessageAction'


const SignupPage = ({ addFlashMessage}) => {
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-3"/>
                <div className="col-md-6">
                    <SignupForm  addFlashMessage={addFlashMessage}/>
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


export default connect(null, mapDispatchToProps)(SignupPage);
