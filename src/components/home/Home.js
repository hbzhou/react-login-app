import React, {useState} from 'react';

const useInputValue = ({initialValue}) => {
    const [value, setValue] = useState(initialValue)
    return {
        value,
        onChange: e => setValue(e.target.value)
    }

}

const InputForm = ({setValue}) => {
    const inputValue = useInputValue("");
    const onSubmit = (e) => {
        e.preventDefault();
        setValue(inputValue)
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" {...inputValue}/>
            </form>
        </div>
    )
}

const ToDoList = () => {
    const [toDoList, setToDoList] = useState([])
    const setValue = (inputValue) => {
        setToDoList([inputValue.value, ...toDoList])
    }

    return (
        <div className="jumbotron">
            <InputForm setValue={setValue}/>
            {
                toDoList.map((todo, key) => {
                    return <p key={key}>{todo}</p>
                })
            }
        </div>
    )


}

export default ToDoList;
