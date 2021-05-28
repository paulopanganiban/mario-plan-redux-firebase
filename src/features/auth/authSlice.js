import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    userName: null,
    userEmail: null,
}

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.userName
            state.userEmail = action.payload.userEmail
        },
        setUserLogout: state => {
            state.userName = null
            state.userEmail = null
        }
    }
});

export const selectUserName = (state) => state.auth.userName
export const selectUserEmail = (state) => state.auth.userEmail
export const {
    setActiveUser, setUserLogout
} = authSlice.actions
export default authSlice.reducer
