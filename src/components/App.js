import React from "react";
import {Link} from "react-router-dom"


const app = () => {
    return (
        <div className="jumbotron">
            <h1>
               <Link to="/users">UserList</Link>
            </h1>
        </div>
    );
}
export default app;
