import React, {useEffect, useState} from "react";

const Home1 = () => {
    console.log("Rendering Home1 component.....")
    const [count, setCount] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1)
        }, 500)
        return () => clearInterval(interval)
    }, [count]);


    return (
        <div>
            <p> Count: {count}</p>
        </div>
    )

}

export default Home1;
