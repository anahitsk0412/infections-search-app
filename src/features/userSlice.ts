import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../models/User';
import axiosInstance from '../utils/AxiosInstance';
import { RootState } from '../utils/Store';

export interface UserState {
  loading: boolean;
  user: User | null;
  error: string | undefined;
}

const initialState: UserState = {
  loading: false,
  user: null,
  error: undefined,
};

class ThunkArg<T> {}

export const getUser = createAsyncThunk('users/info', async () => {
  const response = axiosInstance.get('/users/current');
  console.log('reeeeeeesss-----', response);
  return response;
});

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      (state.error = undefined), (state.user = action.payload.data);
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
  reducers: {},
});

export const userSelector = (state: RootState) => state.userReducer;
export default userSlice.reducer;
