import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {Login, Register} from '../../services';
import {InitialStateBase, UserForLogin, UserForRegister} from '../../types';

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async (userForLogin: UserForLogin) => {
    const result = await Login(userForLogin);
    return await result;
  },
);

export const registerAsync = createAsyncThunk(
  'auth/registerAsync',
  async (userForRegister: UserForRegister) => {
    const result = await Register(userForRegister);
    return await result;
  },
);

interface InitialState extends InitialStateBase {
  token: string;
  userId: number;
}

const initialState: InitialState = {
  token: '',
  userId: 0,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    //Login
    builder.addCase(loginAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      console.log('action', action);
      state.token = action.payload?.data.accessToken.token;
      state.userId = action.payload?.data.userId;
      state.isLoading = false;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //register
    builder.addCase(registerAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(registerAsync.fulfilled, (state, action) => {
      state.token = action.payload?.data;
      state.isLoading = false;
    });
    builder.addCase(registerAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
