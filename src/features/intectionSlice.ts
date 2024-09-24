import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { InfectionSearchResponseItem } from '../models/InfectionSearchResponse';
import axiosInstance from '../utils/AxiosInstance';
import { RootState } from '../utils/Store';

export interface UserState {
  loading: boolean;
  infections: InfectionSearchResponseItem[];
  currentId: number | undefined;
  error: string | undefined;
}

const initialState: UserState = {
  loading: false,
  infections: [],
  currentId: undefined,
  error: undefined,
};

interface CreateUserPayload {
  username: string;
  password: string;
  confirmPassword: string;
  phoneNumber: string;
}

class ThunkArg<T> {}

export const searchInfections = createAsyncThunk(
  'infections/search',
  async (createUserReqData: ThunkArg<CreateUserPayload>) => {
    const response = axiosInstance.post('/infections/_search', {
      ...createUserReqData,
    });
    return response;
  }
);

// export const getUser = createAsyncThunk('user/info', async (userId: ThunkArg<{ id: number }>) => {
//   const response = axiosInstance.get(`/users/${userId}`);
//   return response;
// });

const infectionSlice = createSlice({
  name: 'infections',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(searchInfections.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
    });
    builder.addCase(searchInfections.fulfilled, (state, action) => {
      state.loading = false;
      (state.error = undefined), (state.currentId = action.payload.data.id);
    });
    builder.addCase(searchInfections.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    // builder.addCase(getUser.pending, (state, action) => {
    //   state.loading = true;
    //   state.error = undefined;
    // });
    // builder.addCase(getUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   (state.error = undefined), (state.user = action.payload.data);
    // });
    // builder.addCase(getUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.error.message;
    // });
  },
  reducers: {},
});

export const infectionSelector = (state: RootState) => state.userReducer;
export default infectionSlice.reducer;
