import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import serviceService from '../../services/serviceService';

export const fetchServices = createAsyncThunk('services/fetchServices', async (params = {}, { rejectWithValue }) => {
    try {
        const response = await serviceService.list(params);
        return response;
    } catch (error) {
        return rejectWithValue(error.message || 'Login failed');
    }
});
export const countTotal = createAsyncThunk('services/fetchTotal', async (params = {}, { rejectWithValue }) => {
    try {
        const response = await serviceService.count();
        return response;
    } catch (error) {
        return rejectWithValue(error.message || 'something went wrong ');
    }
});
export const updateCarousel = createAsyncThunk('services/updateCarousel', async (params = {}, { rejectWithValue }) => {
    try {
        const response = await serviceService.setCarousel(params.serviceId,{onCarousel:params.onCarousel});
        return response;
    } catch (error) {
        return rejectWithValue(error.message || 'Login failed');
    }
});

const serviceSlice = createSlice({
    name: 'services',
    initialState: {
        services: [],
        loading: false,
        error: null,
        total:0
    },
    extraReducers: (builder) => {
        builder.addCase(fetchServices.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        builder.addCase(fetchServices.fulfilled, (state, action) => {
            state.loading = false;
            state.services = action.payload.data;
        });
        builder.addCase(fetchServices.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(countTotal.fulfilled, (state, action) => {
            state.loading = false;
            state.total  = action.payload.count
        });
        builder.addCase(countTotal.rejected, (state) => {
            state.loading = false;
            state.total = 0;
        });
        builder.addCase(updateCarousel.fulfilled, (state,action) => {
            state.loading = false;
            const serviceId = action.payload.service.serviceId
            const onCarousel = action.payload.service.onCarousel
            const ind = state.services.findIndex((item) => item.serviceId === serviceId)
            if (state.services[ind]) {
                state.services[ind].onCarousel = onCarousel
            }
        });
        
    },
})

export default serviceSlice.reducer;