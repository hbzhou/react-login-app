import React, {useState, useCallback} from 'react';

const Home4 = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    const handClick = () => {
        setCount(count + 1)
    }
    return (
        <div className="jumbotron">
            <div>
                <p> Count :{count}</p>
                <button onClick={handClick}>Click</button>
            </div>

            <div>
                <p> Count1 :{count1}</p>
                <button onClick={useCallback(() => setCount1(count1 + 1), [count1])}>Click</button>
            </div>
        </div>
    )
}

export default Home4;
