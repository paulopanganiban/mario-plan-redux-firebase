import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth, db } from '../../firebase';
import firebase from 'firebase'
import { isValidElement } from 'react';

const initState = {
    project: [],
    status: 'idle',
}


export const createProjectAsync = createAsyncThunk(
    // name ata to ng action. ATA
    'project/create',
    async ({project, authState}) => {
        db.collection('projects').add({
            title: project.title,
            content: project.content,
            authorFirstName: authState.userName,
            authorEmail: authState.userEmail,
            authorId: authState.userId,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).catch((error) => {
            console.error('Error writing new project to Firebase Database', error)
        })
        return project
    }
);
export const slice = createSlice({
    name: 'projects',
    initialState: initState,
    reducers: {
        getProjects: (state, action) => {
            const { payload } = action
            state.project = payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProjectAsync.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(createProjectAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.projects = action.payload;
            });
    },
})

export const { getProjects } = slice.actions
export default slice.reducer;