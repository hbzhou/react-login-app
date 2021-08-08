import React, {Component} from 'react'
import Home3Child from "./Home3Child";

export default class Home3 extends Component {
    state = {
        time: new Date()
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({time: new Date()})
        }, 1000)
    }


    render() {
        return (
            <div className='jumbotron'>
                <span>Current Time: {this.state.time.toString()}</span>
                <Home3Child seconds={1}/>
            </div>
        )
    }
}
