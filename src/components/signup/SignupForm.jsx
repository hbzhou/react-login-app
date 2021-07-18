import React from 'react'
import classnames from "classnames"
import {withRouter} from 'react-router-dom'


class SignupForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirm: "",
            errorMessage: {},
            isLoading: false

        }
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({isLoading: true})
        this.props.registerActions.registerAction(this.state).then(response => {
                this.props.flashActions.addFlashMessage({
                    type: "success",
                    text: "Register successfully,welcome to join our community!"
                })
                this.props.history.push('/')
            }, ({response}) => {
                this.setState({errorMessage: response.data.errorMessage, isLoading: false})
            }
        )
    }


    render() {
        const {username, email, password, passwordConfirm, isLoading, errorMessage} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Join our community</h1>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input className={classnames('form-control', {'is-invalid': errorMessage.username})}
                           type="text"
                           name="username"
                           value={username}
                           onChange={this.onChange}
                    />
                    {errorMessage.username && <span className="form-text text-muted">{errorMessage.username}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input className={classnames('form-control', {'is-invalid': errorMessage.email})}
                           type="email"
                           name="email"
                           value={email}
                           onChange={this.onChange}/>
                    {errorMessage.email && <span className="form-text text-muted">{errorMessage.email}</span>}
                </div>
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input className={classnames('form-control', {'is-invalid': errorMessage.password})}
                           type="password"
                           name="password"
                           value={password}
                           onChange={this.onChange}/>
                    {errorMessage.password && <span className="form-text text-muted">{errorMessage.password}</span>}

                </div>
                <div className="form-group">
                    <label className="control-label">Confirm Password</label>
                    <input className={classnames('form-control', {'is-invalid': errorMessage.passwordConfirm})}
                           type="password"
                           name="passwordConfirm"
                           value={passwordConfirm}
                           onChange={this.onChange}/>
                    {errorMessage.passwordConfirm &&
                    <span className="form-text text-muted">{errorMessage.passwordConfirm}</span>}
                </div>
                <button disabled={isLoading} className="btn-primary">Register</button>
            </form>
        )
    }
}

export default withRouter(SignupForm);
