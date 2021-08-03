import React from 'react'
import FlashMessage from "./FlashMessage";
import {useSelector} from "react-redux";



const FlashMessageList = () => {
    const flashMessages = useSelector(state => {
        return state.flashMessages;
    });
    return (
        <div className="container">
            {flashMessages.map((message) => {
                return <FlashMessage key={message.id} message={message}/>
            })}
        </div>
    )
}


export default FlashMessageList;
