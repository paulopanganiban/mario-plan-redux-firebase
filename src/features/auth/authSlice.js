import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth } from '../../firebase';
const initialState = {
    userName: null,
    userEmail: null,
    userId: null,
    isSignedIn: null,
    photoURL: null,
    error: null,
}
export const signInUserAsync = createAsyncThunk(
    'auth/signInUserAsync',
    async ({ signIn }) => {
        var user = auth.signInWithEmailAndPassword(signIn.email, signIn.password)
        // .then((userCredential) => {
        //   // Signed in
        //   var user = userCredential.user;
        //   // ...
        //   return user
        // })
        // .catch((error) => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
        // });
        return user
    }
);
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.userName = action.payload.user.userName
            state.userEmail = action.payload.user.userEmail
            state.userId = action.payload.userId
        },
        setUserLogout: state => {
            state.userName = null
            state.userEmail = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInUserAsync.rejected, (state) => {
                state.error = true;
            })
            .addCase(signInUserAsync.pending, (state) => {
                state.status = 'loading';
                state.error = false
            })
            .addCase(signInUserAsync.fulfilled, (state, action) => {
                //   state.userEmail = action.payload.email
                state.isSignedIn = true
                state.userEmail = action.payload.user.email
                state.photoURL = action.payload.user.photoURL
            });
    },
});

export const selectUserName = (state) => state.auth.userName
export const selectUserEmail = (state) => state.auth.userEmail
export const {
    setActiveUser, setUserLogout
} = authSlice.actions
export default authSlice.reducer
