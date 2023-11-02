import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  getAllMyEventTypes,
  addMyEventType,
  deleteMyEventType,
  updateMyEventType,
} from '../../services';
import {InitialStateBase, MyEventType} from '../../types';

export const getMyEventTypesAsync = createAsyncThunk(
  'myEventType/getMyEventTypesAsync',
  async () => {
    const result = await getAllMyEventTypes();
    return result;
  },
);

export const addMyEventTypeAsync = createAsyncThunk(
  'myEventType/addMyEventType',
  async (myEventType: MyEventType) => {
    const result = await addMyEventType(myEventType);
    return result;
  },
);

export const deleteMyEventTypeAsync = createAsyncThunk(
  'myEventType/deleteMyEventType',
  async (myEventType: MyEventType) => {
    const result = await deleteMyEventType(myEventType);
    return result;
  },
);

export const updateMyEventTypeAsync = createAsyncThunk(
  'myEventType/updateMyEventType',
  async (myEventType: MyEventType) => {
    const result = await updateMyEventType(myEventType);
    return result;
  },
);

interface InitialState extends InitialStateBase {
  myEventTypes: MyEventType[];
}

const initialState: InitialState = {
  myEventTypes: [
    {
      id: 0,
      name: 'Coffee Talk',
    },
    {
      id: 1,
      name: 'Travel',
    },
    {
      id: 2,
      name: 'Night Party',
    },
    {
      id: 3,
      name: 'Sport',
    },
    {
      id: 4,
      name: 'Just Fun',
    },
    {
      id: 5,
      name: 'Fishing',
    },
    {
      id: 6,
      name: 'Coding',
    },
    {
      id: 7,
      name: 'Food',
    },
    {
      id: 8,
      name: 'Art',
    },
  ],
  isLoading: false,
  error: null,
};

const myEventTypesSlice = createSlice({
  name: 'myEventTypes',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    //getMyEventTypesAsync
    builder.addCase(getMyEventTypesAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getMyEventTypesAsync.fulfilled, (state, action) => {
      state.myEventTypes = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getMyEventTypesAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //addMyEventTypesAsync
    builder.addCase(addMyEventTypeAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addMyEventTypeAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(addMyEventTypeAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //deleteMyEventTypesAsync
    builder.addCase(deleteMyEventTypeAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteMyEventTypeAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteMyEventTypeAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //updateMyEventTypesAsync
    builder.addCase(updateMyEventTypeAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateMyEventTypeAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(updateMyEventTypeAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default myEventTypesSlice.reducer;
