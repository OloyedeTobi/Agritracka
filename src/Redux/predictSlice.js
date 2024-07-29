import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { predict } from '../Services/api';

export const getPrediction = createAsyncThunk('predict/getPrediction', async ({ light, temperature, humidity, soilMoisture }, thunkAPI) => {
    try {
        const response = await predict(light, temperature, humidity, soilMoisture);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const predictSlice = createSlice({
    name: 'predict',
    initialState: {
        prediction: null,
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPrediction.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getPrediction.fulfilled, (state, action) => {
                state.loading = false;
                state.prediction = action.payload;
            })
            .addCase(getPrediction.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload ? action.payload.detail || 'Prediction failed' : 'Prediction failed';
            });            
    },
});

export default predictSlice.reducer;
