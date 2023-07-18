import React from "react";
import cn from 'classnames';
import Check from "./Check";
import {BsTrash3} from 'react-icons/bs';

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
    return (
        <div className="title"
        onClick={() => changeTodo(todo._id)}> 
            <button className="btn">
                <Check isCompleted={todo.isCompleted}/>
                <span className={cn({'line-through' : todo.isCompleted,})}>{todo.title}</span>
            </button>
            <button onClick={() => removeTodo(todo._id)}>
                <BsTrash3 size={22} className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"/>
            </button>
        </div>
    )
}

export default TodoItem