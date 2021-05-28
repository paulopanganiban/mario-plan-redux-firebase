import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth, db } from '../../firebase';
import firebase from 'firebase'

const initState = [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' },
]

export const createProjectAsync = createAsyncThunk(
    // name ata to ng action. ATA
    'project/create',
    async (payload) => {
        const response = await db.collection('projects').add({
            title: payload.title,
            content: payload.content,
            authorFirstName: 'Olo',
            authorLastName: 'Pangs',
            authorId: 12345,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch((error) => {
            console.error('Error writing new message to Firebase Database', error)
        })
        return response.data
        // call something here database
        // const response = await fetchCount(amount);
        // The value we return becomes the `fulfilled` action payload
        // return response.data;
    }
);
export const slice = createSlice({
    name: 'projects',
    initialState: initState,
    reducers: {
        create: (state, action) => {
            // action.payload
            const { payload } = action
            db.collection('projects').add({
                title: payload.title,
                content: payload.content,
                authorFirstName: 'Olo',
                authorLastName: 'Pangs',
                authorId: 12345,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
                .catch((error) => {
                    console.error('Error writing new message to Firebase Database', error)
                })

            console.log('created project' + payload)
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(createProjectAsync.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(createProjectAsync.fulfilled, (state, action) => {
            state.status = 'idle';
            state += action.payload;
          });
      },
})

export const { create } = slice.actions
export default slice.reducer;