import React, {useEffect, useState} from 'react';

// class Home2 extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0,
//             name: "jack"
//         }
//     }
//
//     componentDidMount() {
//         console.log("rendering from componentDidMount ....")
//         document.title = `Hi click the button for ${this.state.count} times`;
//     }
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log("rendering from componentDidUpdate ....")
//         document.title = `Hi click the button for ${this.state.count} times`;
//     }
//
//     changeName = () => {
//         const name = "Damon"
//         this.setState({name: name})
//     }
//     increment = () => {
//         this.setState({count: this.state.count + 1})
//     }
//
//     render() {
//         return (
//             <div className="jumbotron">
//                 <p>Name: {this.state.name}</p>
//                 <p>{`click the button for ${this.state.count} times`}</p>
//                 <button onClick={this.changeName}>click me</button>
//                 <button onClick={this.increment}>Increase</button>
//             </div>
//         );
//     }
// }

const Home2 = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Jack")

    useEffect(() => {
        console.log("rendering....");
        document.title = `${name} click the button for ${count} times`
    }, [name,count]);

    const changeName = () => {
        setName("Jack" + Math.floor(Math.random() * 10))
    }
    const increment = () => {
        setCount(count + 1)
    }


    return (
        <div className="jumbotron">
            <p>Name: {name}</p>
            <p>{`click the button for ${count} times`}</p>
            <button onClick={changeName}>click me</button>
            <button onClick={increment}>Increase</button>
        </div>
    )

}


export default Home2;