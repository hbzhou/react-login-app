import React, {Component} from 'react'
import FlashMessage from "./FlashMessage";
import {connect} from "react-redux";
import {removeFlashMessage} from "../../actions/flashMessages";


class FlashMessageList extends Component {
    render() {
        return (
            <div className="container">
                {this.props.messages.map((message) => {
                    return <FlashMessage key={message.id} message={message} removeFlashMessage={this.props.removeFlashMessage}/>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages
    }
}


export default connect(mapStateToProps, {removeFlashMessage})(FlashMessageList)
