// steps
// import { createSlice} from '@reduxjs/toolkit

import { createSlice } from '@reduxjs/toolkit'
let todoId = 1;
export const slice = createSlice({
    // name of slice
    name: 'todos',
    initialState: [],
    // define todo reducers
    reducers: {
        // no need descriptive since we declared a name for this slice = 'todos'
        create: (state, action) => {
            const { payload } = action
            // payload contains the name
            // none immer 
            // return [...state, { new object}]
            state.push({
                id: todoId,
                description: payload,
                isComplete: false,
            })
            todoId++
        },
        edit: (state, action) => {
            const { id, description } = action.payload
            const todoToEdit = state.find(todo => todo.id === id)
            if (todoToEdit) {
                todoToEdit.description = description
            }
        },
        toggleComplete: (state, action) => {
            const { payload } = action
            const todoToToggle = state.find(todo => todo.id === payload)
            if (todoToToggle) {
                todoToToggle.isComplete = !todoToToggle.isComplete
            }

        },
        remove: (state, action) => {
            const { payload } = action
            const index = state.find(todo => todo.id === payload.id)
            // no index found
            if (index !== -1) {
                state.splice(index, 1)
            }
        }
    }
})
export const { create, edit, remove, toggleComplete } = slice.actions
export default slice.reducer;