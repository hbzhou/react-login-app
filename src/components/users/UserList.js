import React, {useEffect, useState} from 'react';

import {getUsers} from '../../actions/userAction'
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import User from "./User";


const UserList = ({userList}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        userList().then((response) => {
            setUsers(response.data)
        }, ({response}) => {
            console.log(response.data.message)
        })
    }, [userList])

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
        userList: bindActionCreators(getUsers, dispatch)
    };
}


export default connect(null, mapDispatchToProps)(UserList);
