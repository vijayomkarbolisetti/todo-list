import React from 'react'
import { useState } from "react"
import AddTodoForm from '../components/AddTodoForm';
import TodoList from '../components/Todo/TodoList';

const HomePage = () => {
    const [todoList, setTodoList] = useState([]);


    return (
        <div>
            <AddTodoForm
                setTodoList={setTodoList}
            />
            <TodoList
                todoList={todoList}
                setTodoList={setTodoList}
            />
        </div>
    )
}

export default HomePage