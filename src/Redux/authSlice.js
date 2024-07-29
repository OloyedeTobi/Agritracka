import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, signup } from '../Services/api';

export const loginUser = createAsyncThunk('auth/loginUser', async ({ email, password }, thunkAPI) => {
    try {
        const response = await login(email, password);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

export const signupUser = createAsyncThunk('auth/signupUser', async ({ firstName, lastName, email, password }, thunkAPI) => {
    try {
        const response = await signup(firstName, lastName, email, password);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false,
        error: null,
        successMessage: null,
    },
    reducers: {
        logout(state) {
            state.user = null;
            state.successMessage = 'Logged out successfully';
        },
        clearSuccessMessage(state) {
            state.successMessage = null;
        },
        clearErrorMessage(state) {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.successMessage = 'Logged in successfully';
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'Failed to login. Please sign up if you do not have an account.';
            })
            .addCase(signupUser.pending, (state) => {
                state.loading = true;
                state.error = null;
                state.successMessage = null;
            })
            .addCase(signupUser.fulfilled, (state, action) => {
                state.loading = false;
                state.successMessage = 'Signed up successfully. Please log in.';
            })
            .addCase(signupUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const { logout, clearSuccessMessage, clearErrorMessage } = authSlice.actions;

export default authSlice.reducer;
