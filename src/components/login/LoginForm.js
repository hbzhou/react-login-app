import React from "react";
import classnames from "classnames"
import {withRouter} from 'react-router-dom'
import {useForm} from "react-hook-form";
import authService from "../../services/authService"


const LoginForm = ({addFlashMessage, history}) => {

    const onSubmit = (data) => {
        authService.login(data).then((response) => {
            const authentication = response.data.authentication;
            const user = {
                name: authentication.name,
                token: response.data.token,
                authorities: authentication.authorities
            }
            localStorage.setItem("user", JSON.stringify(user));

            addFlashMessage({
                type: "success",
                text: "Login successfully"
            })
            history.push('/')
            window.location.reload();
        }, ({error}) => {
            addFlashMessage({
                type: "danger",
                text: error.data.message
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
