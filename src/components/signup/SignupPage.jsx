import React from 'react'
import SignupForm from './SignupForm'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {register} from '../../actions/userActions';
import {addFlashMessage} from '../../actions/flashMessageActions'


class SignupPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <SignupForm registerUser={this.props.registerUser}
                                    addFlashMessage ={this.props.addFlashMessage}/>
                    </div>
                    <div className="col-md-3"/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerUser: bindActionCreators(register, dispatch),
        addFlashMessage: bindActionCreators(addFlashMessage, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(SignupPage);
