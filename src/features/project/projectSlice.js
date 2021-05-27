import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initState = [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' },
]
function fetchCount(amount = 1) {
    return new Promise((resolve) =>
        setTimeout(() => resolve({ data: amount }), 500)
    );
}
export const createAsync = createAsyncThunk(
    // name ata to ng action. ATA
    'project/create',
    async (amount) => {
        // call something here database
        const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        return response.data;
    }
);
export const slice = createSlice({
    name: 'projects',
    initialState: initState,
    reducers: {
        create: (state, action) => {
            const { payload } = action
            // make async call to database
            // 
            console.log('created project' + payload)
        }
    }
})

export const { create } = slice.actions
export default slice.reducer;