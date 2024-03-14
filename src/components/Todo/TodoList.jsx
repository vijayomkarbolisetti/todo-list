import React from 'react'
import TodoItem from './TodoItem';

const TodoList = (props) => {
    const {
        todoList,
        setTodoList
    } = props;
    const removeTodo = (index) => {
        const newArray = todoList.filter((todo, i) => {
            return index != i
        })
        setTodoList(newArray)
    }
    const handleUpdate = (index,text)=>{
        const newArr = todoList;
        newArr[index] = text;
        
        setTodoList(newArr)
        // const newArr = todoList.map((todo,i)=>{
        //     if(index==i){
        //         return todo=text
        //     }
        //     else{
        //         return todo
        //     }
        // })
        // console.log(newArr)
        // setTodoList(newArr)
    }
    return (

        <ul>
            {
                todoList.map((todo, index) => {
                    return <TodoItem
                        todo={todo}
                        index={index}
                        removeTodo={removeTodo}
                        handleUpdate={handleUpdate}
                    />
                })
            }
        </ul>
    )
}

export default TodoList