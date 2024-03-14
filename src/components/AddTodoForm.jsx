import React, { useState } from 'react'

const AddTodoForm = (props) => {
    const [inputValue, setInputValue] = useState('');
    const { setTodoList } = props
    return (
        <>
            <input type="text" placeholder="Type here" value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }} />

            <button onClick={() => {
                setTodoList(prev => {
                    return [...prev, inputValue]
                })
            }}>Add ToDo</button>
        </>
    )
}

export default AddTodoForm