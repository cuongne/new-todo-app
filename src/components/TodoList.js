import React, { useState } from 'react'
import TodoForm from './TodoForm';

function TodoList() {
    const [todos, setTodo] = useState('');
    return (
        <div>
            <h1>What plan today</h1>
            <TodoForm/>
        </div>
    )
}

export default TodoList
