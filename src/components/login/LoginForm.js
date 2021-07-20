import React from "react";
import classnames from "classnames"
import {withRouter} from 'react-router-dom'
import {useForm} from "react-hook-form";


const LoginForm = ({login, addFlashMessage, history}) => {

    const onSubmit = (data) => {
        login(data).then(() => {
            addFlashMessage({
                type: "success",
                text: "Login successfully"
            })
            history.push('/')
        }, ({response}) => {
            addFlashMessage({
                type: "danger",
                text: response.data.message
            })
        })
    }

    const {register, handleSubmit, formState: {errors}} = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" className={classnames("form-control", {"is-invalid": errors.username})}
                           {...register("username", {required: true})}
                    />
                    {errors.username && <span className="form-text text-muted">Username is required</span>}
                </div>

                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="password" className={classnames("form-control", {"is-invalid": errors.password})}
                           {...register("password", {required: true})}
                    />
                    {errors.password && <span className="form-text text-muted">Password is required</span>}
                </div>
                <button className="btn btn-primary">Login</button>
            </form>
        </div>

    )
}

export default withRouter(LoginForm)