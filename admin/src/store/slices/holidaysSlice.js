import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import holidayService from '../../services/holidayService'


export const fetchHolidays = createAsyncThunk('holidays/fetchHolidays', async (params = {}, { rejectWithValue }) => {
    try {
        const response = await holidayService.list(params);
        return response;
    } catch (error) {
        return rejectWithValue(error.message || 'Holidays fetch failed');
    }
});

export const deleteHoliday = createAsyncThunk('holidays/deleteHoliday', async (params = {}, { rejectWithValue }) => {
    try {
        const response = await holidayService.delete(params);
        return response;
    } catch (error) {
        return rejectWithValue(error.message || 'Holidays fetch failed');
    }
});




const holidaySlice = createSlice({
    name: 'holidays',
    initialState: {
        holidays: [],
        loading: false,
        error: null,
        countRequested: 0
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
        builder.addCase(fetchHolidays.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchHolidays.fulfilled, (state, action) => {
            state.loading = false;
            state.holidays = action.payload.data;

        });
        builder.addCase(fetchHolidays.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(deleteHoliday.fulfilled, (state, action) => {
            const holidayId = action.meta.arg
            state.holidays = state.holidays.filter((item) => item.holidayId !== holidayId)
            state.loading = false;
        });

    },
})

// export const { logout } = appointmentSlice.actions;
export default holidaySlice.reducer;