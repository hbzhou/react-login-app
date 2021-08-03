import React from 'react'
import {useDispatch} from "react-redux";
import classnames from 'classnames'
import {removeFlashMessage} from "../../actions/flashMessageAction";

const FlashMessage = ({message}) => {
    const {type, text} = message;
    const dispatch = useDispatch();

    const removeMessage = () => {
        dispatch(removeFlashMessage(message));
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


