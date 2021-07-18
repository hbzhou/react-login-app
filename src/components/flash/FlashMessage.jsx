import React, {Component} from 'react'
import classnames from 'classnames'

export default class FlashMessage extends Component {


    render() {
        const {type, text} = this.props.message;
        return (
            <div className={classnames('alert', {
                'alert-success': type === 'success',
                'alert-danger': type === 'danger'
            })}>
                <button onClick={this.removeMessage} className="close">&times;</button>
                {text}
            </div>
        )
    }

    removeMessage = () => {
        this.props.removeFlashMessage(this.props.message);
    }


}
