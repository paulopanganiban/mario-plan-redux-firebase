import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { auth } from '../../firebase';
import { toast } from 'react-toastify'
toast.configure()
const initialState = {
    user: {},
    loading: false,
    userName: null,
    userEmail: null,
    userId: null,
    isSignedIn: false,
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
export const signUpUserAsync = createAsyncThunk(
    'auth/signUpUserAsync',
    async (email, password) => {
        console.log(email,password)
        return auth.createUserWithEmailAndPassword(email, password.toString())
    }
)
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.user = action.payload
            state.isSignedIn = true
            // state.userEmail = action.payload.user.userEmail
            // state.userId = action.payload.userId
        },
        setUserLogout: (state, action) => {
            state = initialState
            state.isSignedIn = false
            toast(`You are now logged out.`)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signInUserAsync.rejected, (state) => {
                state.error = true;
                toast.warn('Wrong credentials')
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
                toast(`Welcome! ${action.payload.user.email}`)
            })
            .addCase(signUpUserAsync.rejected, (state) => {
                state.loading = false;
                toast.warn('Registration failed')
            })
            .addCase(signUpUserAsync.pending, (state) => {
                state.status = 'loading';
                state.loading = true
            })
            .addCase(signUpUserAsync.fulfilled, (state, action) => {
                toast(`Registration success ${action.payload.user.email}`)
                state.loading = false
                state.isSignedIn = true
            })
    },
});

export const selectUserName = (state) => state.auth.userName
export const selectUserEmail = (state) => state.auth.userEmail
export const {
    setActiveUser, setUserLogout
} = authSlice.actions
export default authSlice.reducer
