import React, {useEffect, useState} from 'react';

import User from "./User";
import userService from "../../services/userService"
import {addFlashMessage} from "../../actions/flashMessageAction";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


const UserList = ({addFlashMessage, history}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getUsers().then((response) => {
            setUsers(response.data)
        }, ({response}) => {
            console.log(response.data.message)
            addFlashMessage({
                type: "danger",
                text: response.data.message
            })
            history.push("/login")

        })
    },[history,addFlashMessage])

    return (
        <div className="jumbotron">
            <table className="table table-striped">
                <tbody>
                {users.length !== 0 && <tr className="table-primary">
                    <th>Username</th>
                    <th>Email</th>
                </tr>}
                {
                    users.map(user => {
                        return <User key={user.id} user={user}/>
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFlashMessage: bindActionCreators(addFlashMessage, dispatch)
    }
}


export default connect(null, mapDispatchToProps)(UserList);
