import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import appointmentService from '../../services/appointmentService';

export const fetchAppointments = createAsyncThunk('appointments/fetchAppointments', async (params = {}, { rejectWithValue }) => {
    try {
        const response = await appointmentService.list(params);
        return response;
    } catch (error) {
        return rejectWithValue(error.message || 'Login failed');
    }
});


const appointmentSlice = createSlice({
    name: 'appointments',
    initialState: {
        appointments: [],
        loading: false,
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
        // logout: (state) => {
        //     state.isLoggedIn = false;
        //     state.user = null;
        //     state.error = null;
        //     localStorage.removeItem('token')
        //     localStorage.removeItem('user')
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAppointments.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchAppointments.fulfilled, (state, action) => {
            state.loading = false;
            state.appointments = action.payload.data;
        });
        builder.addCase(fetchAppointments.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    },
})

// export const { logout } = appointmentSlice.actions;
export default appointmentSlice.reducer;