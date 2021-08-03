import React, {useState} from 'react';

const useInputValue = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    return {
        value,
        onChange: e => setValue(e.target.value),
        reset: () => setValue("")
    }
}

const InputForm = ({setValue, clearUp}) => {
    const {reset, ...inputValue} = useInputValue("");
    const onSubmit = (e) => {
        e.preventDefault();
        setValue(inputValue.value)
        reset()
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" {...inputValue}/>
            </form>
            <button onClick={clearUp}>Clear up</button>
        </div>
    )
}

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([])
    const setValue = (inputValue) => {
        setToDoList([inputValue, ...toDoList])
    }
    const cleanUp = () => {
        setToDoList([])
    }

    return (
        <div className="jumbotron">
            <InputForm setValue={setValue} clearUp={cleanUp}/>
            {
                toDoList.map((todo, key) => {
                    return <p key={key}>{todo}</p>
                })
            }
        </div>
    )


}

export default ToDoList;
