import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {InitialStateBase, UserProfileDetail} from '../../types';
import {getUsersByMyEventId} from '../../services';

export const getUsersByMyEventIdAsync = createAsyncThunk(
  'users/getUserProfileDetail',
  async (myEventId: number) => {
    const result = await getUsersByMyEventId(myEventId);
    return await result;
  },
);

interface InitialState extends InitialStateBase {
  userProfileDetail: UserProfileDetail | null;
  userProfileDetails: UserProfileDetail[];
}

const initialState: InitialState = {
  userProfileDetail: null,
  userProfileDetails: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //getUsersByMyEventIdAsync
    builder.addCase(getUsersByMyEventIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getUsersByMyEventIdAsync.fulfilled, (state, action) => {
      console.log('action.payload.data', action.payload.data);
      state.userProfileDetails = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getUsersByMyEventIdAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default userSlice.reducer;
