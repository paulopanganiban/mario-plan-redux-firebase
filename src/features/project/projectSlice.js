import { createSlice } from '@reduxjs/toolkit'
const initState =  [
      {id: '1', title: 'help me find peach', content: 'blah blah blah'},
      {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
      {id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah'},
    ]



export const slice = createSlice({
    name: 'projects',
    initialState: initState,
    reducers: {

    }
})

export const { } = slice.actions
export default slice.reducer;