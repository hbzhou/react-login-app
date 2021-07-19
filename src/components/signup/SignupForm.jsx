import React, {useRef} from 'react'

import classnames from "classnames"
import {withRouter} from 'react-router-dom'
import {useForm} from "react-hook-form";


function SignupForm({registerActions, flashActions, history}) {
    const {register, handleSubmit,watch, formState: {errors}} = useForm();
    const password = useRef({});
    password.current = watch("password", "");
    const onSubmit = (data) => {
        registerActions.registerAction(data).then(response => {
                flashActions.addFlashMessage({
                    type: "success",
                    text: "Register successfully,welcome to join our community!"
                })
                history.push('/')
            }, ({response}) => {
                flashActions.addFlashMessage({
                    type: "danger",
                    text: response.data.error
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
                       {...register("email", {required: true})}/>
                {errors.email && <span className="form-text text-muted">Email is required</span>}
            </div>
            <div className="form-group">
                <label className="control-label">Password</label>
                <input className={classnames('form-control', {'is-invalid': errors.password})}
                       name="password"
                       type="password"
                       ref={register("password",{
                           required: "You must specify a password",
                           minLength: {
                               value: 8,
                               message: "Password must have at least 8 characters"
                           }
                       })}/>
                {errors.password && <span className="form-text text-muted">{errors.password.message}</span>}

            </div>
            <div className="form-group">
                <label className="control-label">Confirm Password</label>
                <input className={classnames('form-control', {'is-invalid': errors.passwordConfirm})}
                       type="password"
                       ref={register("passwordConfirm", {validate: value => value === password.current || "The passwords do not match"})}/>
                {errors.passwordConfirm &&
                <span className="form-text text-muted">{errors.passwordConfirm.message}</span>}
            </div>
            <button className="btn-primary">Register</button>
        </form>
    )


}

export default withRouter(SignupForm);
