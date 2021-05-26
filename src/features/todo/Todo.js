// import { findByLabelText } from '@testing-library/dom'
import React from 'react'
import Clock from 'react-live-clock';
import TodoForm from './TodoForm';
const Todo = () => {
    return (
        <div className="container section">
            <h1>
                <Clock format={'HH:mm:ss'} 
                ticking={true} 
                timezone={'US/Pacific'} />
            </h1>
                <TodoForm/>
        </div>
    )
}

export default Todo
