import React, { useState } from 'react'

const TodoItem = (props) => {
    const {
        todo,
        index,
        removeTodo,
        handleUpdate
    } = props

    const [inputValue, setInputValue] = useState(todo)
    const [isEditClicked, setIsEditClicked] = useState(false)
    return (
        <li key={index}>
            {
                isEditClicked ? <input value={inputValue} onChange={(e)=>{
                    setInputValue(e.target.value)
                }}/> : <span>{todo}</span>
            }
            <button onClick={() => {
                removeTodo(index)
            }}>Delete</button>
            {
                isEditClicked ? <button onClick={() => {
                    // setIsEditClicked(true)
                    handleUpdate(index,inputValue)

                    setIsEditClicked(false)
                }}>Update</button> : <button onClick={() => {
                    setIsEditClicked(true)
                }}>Edit</button> 
            }
        </li>
    )
}

export default TodoItem