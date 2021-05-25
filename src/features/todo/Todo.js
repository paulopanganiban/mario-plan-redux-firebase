// import { findByLabelText } from '@testing-library/dom'
import React, { useEffect, useState } from 'react'
import Clock from 'react-live-clock';
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
// 1st import useState, useDispatch, useSelector
// import the actions from todoSlice
import { create, edit, remove, toggleComplete } from './todoSlice'
const Todo = () => {
    // get state
    const todos = useSelector(state => state.todos)
    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: finish this todo
    }
    const [inputText, setInputText] = useState('')
    const [value, setValue] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(
          () => setValue(new Date()),
          1000
        );
     
        return () => {
          clearInterval(interval);
        }
      }, []);
    return (
        // date today
    <div className="container section">
  <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
   <Form onSubmit={handleSubmit}>
  <Form.Group controlId="formBasicEmail">
    <Form.Label></Form.Label>
    <Form.Control type="text" placeholder="" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
    </div>
    )
}

export default Todo
