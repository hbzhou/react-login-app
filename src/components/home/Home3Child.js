import React, {Component} from 'react'

 class Home3Child extends Component {

    render() {
        console.log('Home3Child');
        const {seconds} = this.props;
        return (
            <div className='container'>
                <span>Home3 Child current time: {seconds}</span>
            </div>
        )
    }
}

export default React.memo(Home3Child)
