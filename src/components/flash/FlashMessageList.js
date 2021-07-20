import React from 'react'
import FlashMessage from "./FlashMessage";
import {connect} from "react-redux";
import {removeFlashMessage} from "../../actions/flashMessageActions";


const FlashMessageList = ({removeFlashMessage, flashMessages}) => {
    return (
        <div className="container">
            {flashMessages.map((message) => {
                return <FlashMessage key={message.id} message={message} removeFlashMessage={removeFlashMessage}/>
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        flashMessages: state.flashMessages
    }
}


export default connect(mapStateToProps, {removeFlashMessage})(FlashMessageList)
