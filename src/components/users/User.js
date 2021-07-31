import React from 'react'

const User = ({user}) => {
    return (
        <tr className="table-primary">
            <td>{user.username}</td>
            <td>{user.email}</td>
        </tr>
    )
}

export default User;
