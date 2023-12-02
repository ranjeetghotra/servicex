import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../services/authService';

export const login = createAsyncThunk('auth/login', async ({ username, password }, { rejectWithValue }) => {
    try {
        const response = await authService.login(username, password);
        return response;
    } catch (error) {
        return rejectWithValue(error.message || 'Login failed');
    }
});

const user = localStorage.getItem('user')

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: !!user,
        user: JSON.parse(user),
        error: null,
    },
    reducers: {
        // loginSuccess: (state, action) => {
        //     state.isLoggedIn = true;
        //     state.user = action.payload.user;
        //     state.error = null;
        //     localStorage.setItem('token', action.payload.token)
        // },
        // loginFailure: (state, action) => {
        //     state.isLoggedIn = false;
        //     state.user = null;
        //     state.error = action.payload;
        //     localStorage.removeItem('token')
        // },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.error = null;
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        },
    },
    extraReducers: (builder) => {
        // Handle the fulfilled action from the login thunk
        builder.addCase(login.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.error = null;
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('user', JSON.stringify(action.payload.user))
        });
        // Handle the rejected action from the login thunk
        builder.addCase(login.rejected, (state, action) => {
            state.isLoggedIn = false;
            state.user = null;
            state.error = action.payload;
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        });
    },
})

export const { logout } = authSlice.actions;
export default authSlice.reducer;