import React from 'react'
import {useDispatch} from "react-redux";

import classnames from "classnames"
import {withRouter} from 'react-router-dom'
import {useForm} from "react-hook-form";
import authService from "../../services/authService"
import {addFlashMessage} from '../../actions/flashMessageAction'


const SignupForm = ({history}) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const dispatchFlashMessage = message => dispatch(addFlashMessage(message))
    const onSubmit = (data) => {
        authService.registerUser(data).then(() => {
                dispatchFlashMessage({
                    type: "success",
                    text: "Register successfully,welcome to join our community!"
                });
                history.push('/login')
            }, ({response}) => {
                dispatchFlashMessage({
                    type: "danger",
                    text: response.data.message
                })
            }
        )
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h1>Join our community</h1>
            <div className="form-group">
                <label className="control-label">Username</label>
                <input className={classnames('form-control', {'is-invalid': errors.username})}
                       type="text"
                       {...register("username", {required: true})}
                />
                {errors.username && <span className="form-text text-muted">UserName is required</span>}
            </div>
            <div className="form-group">
                <label className="control-label">Email</label>
                <input className={classnames('form-control', {'is-invalid': errors.email})}
                       type="email"
                       {...register("email", {required: true})}
                />
                {errors.email && <span className="form-text text-muted">Email is required</span>}
            </div>
            <div className="form-group">
                <label className="control-label">Password</label>
                <input className={classnames('form-control', {'is-invalid': errors.password})}
                       name="password"
                       type="password"
                       {...register("password", {required: true})}
                />
                {errors.password && <span className="form-text text-muted">Password is required</span>}
            </div>
            <div className="form-group">
                <label className="control-label">Confirm Password</label>
                <input className={classnames('form-control', {'is-invalid': errors.passwordConfirm})}
                       type="password"
                       {...register("passwordConfirm", {required: true})}
                />
                {errors.passwordConfirm && <span className="form-text text-muted">Confirm password is required</span>}
            </div>
            <button className="btn-primary">Register</button>
        </form>
    )


}

export default withRouter(SignupForm);
