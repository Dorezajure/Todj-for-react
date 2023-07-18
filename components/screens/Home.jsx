import React, { useState } from "react";
import TodoItem from "./item/TodoItem";
import CreateTodoField from './create-todo-field/CreateTodoField'

const data = [
    {
        _id: 'web1',
        title: 'Finish the essay collaboration', 
        isCompleted: false 
    }, 
    {
        _id: 'web2',
        title: 'Read next book', 
        isCompleted: false 
    }, 
    {
        _id: 'web3',
        title: 'Send the finish course', 
        isCompleted: false 
    }
]

const Home = () => {
    const [todos, setTodos] = useState(data)

    const changeTodo = id => {
        const copy = [...todos]
        const current = copy.find(t => t._id === id) 
        current.isCompleted = !current.isCompleted
        setTodos(copy)
    }

    const removeTodo = id => {
        setTodos([...todos].filter(t => t._id !== id))
    }

    return (
        // className=" text-white w-4/5 mx-auto"
        // className="text-2xl font-bold text-center mb-8"
        <div className="home">
            <h1 className="home__apps">Todo Apps</h1>
            {todos.map(todo => <TodoItem key={todo._id} todo={todo} changeTodo={changeTodo} removeTodo = {removeTodo}/>)}
            <CreateTodoField setTodos={setTodos}/>
        </div>
    )
}

export default Home

