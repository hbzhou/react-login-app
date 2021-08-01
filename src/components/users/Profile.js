import React from 'react'
import userService from "../../services/userService";

const Profile = () => {
    const currentUser = userService.getCurrentUser();
    return (
        <div className="jumbotron">
            <p><strong>{currentUser.name}</strong>'s Profile</p>
            {currentUser.token && <p>
                <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
                {currentUser.token.substr(currentUser.token.length - 20)}
            </p>}
            <p><strong>Authorities:</strong></p>
            <ul>
                {currentUser.authorities &&
                currentUser.authorities.map((authority, index) => <li key={index}>{authority.authority}</li>)}
            </ul>
        </div>
    )
}
export default Profile;
