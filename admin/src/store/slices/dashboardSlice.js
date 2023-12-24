import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import dashboardService from '../../services/dashboardService';

export const fetchDashboard = createAsyncThunk('dashboard', async (params, { rejectWithValue }) => {
    try {
        const response = await dashboardService.get();
        return response;
    } catch (error) {
        return rejectWithValue(error.message || 'Fetch failed');
    }
});

const counts = localStorage.getItem('counts')

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        counts: counts ? JSON.parse(counts) : {
            requestedAppointments: 0,
            confirmedAppointments: 0,
            completedAppointments: 0,
            upcomingHolidays: 0,
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchDashboard.fulfilled, (state, action) => {
            state.counts = action.payload.counts;
            localStorage.setItem('counts', JSON.stringify(action.payload.counts))
        });
    },
})

export default dashboardSlice.reducer;