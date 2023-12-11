import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import contactService from '../../services/contactService';
export const fetchContacts = createAsyncThunk('contacts/fetchContacts', async (params = {}, { rejectWithValue }) => {
    try {
        const response = await contactService.list(params);
        return response;
    } catch (error) {
        return rejectWithValue(error.message || 'Something went Wrong');
    }
});


const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        contacts: [],
        pagination:{},
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
        builder.addCase(fetchContacts.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.contacts = action.payload.data;
            const { currentPage, totalPages, totalItems, hasNextPage, hasPrevPage } = action.payload;
            state.pagination = {
                currentPage,
                totalPages,
                totalItems,
                hasNextPage,
                hasPrevPage,
              };
        });
        builder.addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.pagination = {}
        });
       
    },
})

// export const { logout } = appointmentSlice.actions;
export default contactSlice.reducer;