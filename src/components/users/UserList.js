import React, {useEffect, useState} from 'react';

import User from "./User";
import {getUsers} from "../../services/userService"


const UserList = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response.data)
        }, ({response}) => {
            console.log(response.data.message)
        })
    }, [])

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


export default UserList;
