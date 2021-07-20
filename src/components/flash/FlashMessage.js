import React from 'react'
import classnames from 'classnames'

const FlashMessage = ({message, removeFlashMessage}) => {
    const {type, text} = message;

    const removeMessage = () => {
        removeFlashMessage(message);
    }

    return (
        <div className={classnames('alert', {
            'alert-success': type === 'success',
            'alert-danger': type === 'danger'
        })}>
            <button onClick={removeMessage} className="close">&times;</button>
            {text}
        </div>
    )
}
export default FlashMessage;


