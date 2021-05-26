import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// 1st import useState, useDispatch, useSelector
// import the actions from todoSlice
import { create, edit, remove, toggleComplete, calculateAverageTime } from './todoSlice'

const TodoForm = () => {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos)
    const [isEditingTodo, setIsEditingTodo] = useState(-1)
    const [project, setProject] = useState({
        designCreated: '',
        duration: '',
        isDone: false,
    })
    const [editText, setEditText] = useState('')
 

    function handleChange(e) {
        const { name, value } = e.target
        setProject({ ...project, [name]: value })
    }
    function handleSubmit(event) {
        event.preventDefault()
        dispatch(calculateAverageTime(project))
        console.log(project)
    }
    const handleDelete = (id) => () => {
        dispatch(remove(id))
    }
    const handleToggle = (id) => () => {
        dispatch(toggleComplete(id))
    }
    const handleEdit = (id, duration) => () => {
        setIsEditingTodo(id)
        setEditText(duration)
    }
    const handleUpdate = (e, id, duration, designCreated) => () => {
        e.preventDefault()
        dispatch(edit({id: isEditingTodo, duration: editText}))
        setIsEditingTodo(-1)
        setEditText('')
    }
    return (
        <div className="">
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div className="input-field">
                    <label htmlFor="designCreated">Designs created</label>
                    <input name="designCreated" value={project.designCreated} type="text" onChange={handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="duration">Duration</label>
                    <textarea name="duration" value={project.duration} className="materialize-textarea" onChange={handleChange}></textarea>
                </div>
                {/* <div className="input-field">
                <input disabled value="I am not editable" id="disabled" type="text" class="validate" />
                <label for="disabled">Disabled</label>
            </div> */}
                <button type='submit'
                    className="btn pink-ligthen-1 z-depth-0">Add</button>


            </form>
            {
                todos.map(todo => (
                    <div key={todo.id}>
                        {isEditingTodo === todo.id ? (
                            <>  
                            <form action="" onSubmit={handleUpdate}>

                                        <input type="text" onChange={
                                            e => setEditText(e.target.value)
                                        }/>
                                        <button type="submit">Update</button>
                            </form>
                            </>) : (
                            <>
                                <div style={todo.isComplete ? { textDecoration: 'line-through' } : { textDecoration: '' }}>
                                    <h4>

                                        {todo.designCreated}
                                    </h4>


                                    <h4>{todo.duration}</h4>
                                </div>

                                {todo.isDone ? "DONE" : ""}
                                <button onClick={handleDelete(todo.id)}>Delete</button>
                                <button onClick={handleToggle(todo.id)}>Toggle</button>
                                <button onClick={handleEdit(todo.id, todo.duration, todo.designCreated)}>Edit</button>
                            </>
                        )}

                    </div>
                ))
            }
        </div>

    )
}

export default TodoForm
