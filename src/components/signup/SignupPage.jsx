import React from 'react'
import SignupForm from './SignupForm'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as registerActions from '../../actions/registerAction';
import * as flashMessageActions from '../../actions/flashMessages'


class SignupPage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="row">
                    <div className="col-md-3"/>
                    <div className="col-md-6">
                        <SignupForm registerActions={this.props.registerActions}
                                    flashActions={this.props.flashMessageActions}/>
                    </div>
                    <div className="col-md-3"/>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        registerActions: bindActionCreators(registerActions, dispatch),
        flashMessageActions: bindActionCreators(flashMessageActions, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(SignupPage);
