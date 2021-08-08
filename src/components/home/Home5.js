import React, {useReducer} from 'react';

const initialState = {count: 0}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            throw new Error('Unknown action' + action.type);
    }
}
const Home5 = () => {
    console.log("Home5");
    const [state, dispatch] = useReducer(reducer, initialState, (initialState) => initialState)
    return (
        <div className='jumbotron'>
            <p> Count :{state.count} </p>
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </div>
    )
}

export default Home5
