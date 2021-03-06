import React, { useState } from 'react'
// 1st import useState, useDispatch, useSelector
// import the actions from todoSlice
import { useDispatch, useSelector } from 'react-redux'
import { create, createProjectAsync } from '../../features/project/projectSlice'

const CreateProject = () => {
    const dispatch = useDispatch()
    // get state
    const authState = useSelector(state => state.auth)
    const projectState = useSelector(state => state.projects)
    const [project, setProject] = useState({
        title: '',
        content: '',
    })
    function handleChange(e) {
        const { name, value } = e.target
        setProject({ ...project, [name]: value })
    }
    function handleSubmit(event) {
        event.preventDefault()
        dispatch(createProjectAsync({project, authState}))
        console.log(project)
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className="white">
                <h5 className="grey-text text-darken-3">Create Project</h5>
                <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input name="title" value={project.title} type="text" onChange={handleChange} />
                </div>

                <div className="input-field">
                    <label htmlFor="content">Content</label>
                    <textarea name="content" value={project.content} className="materialize-textarea" onChange={handleChange}></textarea>
                </div>
                <button disabled={projectState.status !== 'idle'}className="btn pink-ligthen-1 z-depth-0">
                    {projectState.status}
                </button>
            </form>
        </div >
    )
}

export default CreateProject


