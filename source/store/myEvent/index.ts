import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {InitialStateBase, MyEvent} from '../../types';
import {
  getAllMyEvents,
  getMyEventById,
  getMyEventsByUserId,
  addMyEvent,
  deleteMyEvent,
  updateMyEvent,
} from '../../services';

export const getMyEventsAsync = createAsyncThunk(
  'myEvent/getMyEventsAsync',
  async () => {
    const result = await getAllMyEvents();
    return result;
  },
);

export const getMyEventByIdAsync = createAsyncThunk(
  'myEvent/getMyEventByIdAsync',
  async (myEventId: number) => {
    const result = await getMyEventById(myEventId);
    return result;
  },
);

export const getMyEventsByUserIdAsync = createAsyncThunk(
  'myEvent/getMyEventsByUserId',
  async (userId: number) => {
    const result = await getMyEventsByUserId(userId);
    return result;
  },
);

export const addMyEventAsync = createAsyncThunk(
  'myEvent/addMyEventAsync',
  async (myEvent: MyEvent) => {
    const result = await addMyEvent(myEvent);
    return result;
  },
);

export const deleteMyEventAsync = createAsyncThunk(
  'myEvent/deleteMyEventAsync',
  async (myEvent: MyEvent) => {
    const result = await deleteMyEvent(myEvent);
    return result;
  },
);

export const updateMyEventAsync = createAsyncThunk(
  'myEvent/updateMyEventAsync',
  async (myEvent: MyEvent) => {
    const result = await updateMyEvent(myEvent);
    return result;
  },
);

interface InitialState extends InitialStateBase {
  myEvents: MyEvent[];
  myEvent: MyEvent | null;
}

const initialState: InitialState = {
  myEvents: [],
  myEvent: null,
  isLoading: false,
  error: null,
};

export const myEventsSlice = createSlice({
  name: 'myEvents',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    //getMyEventsAsync
    builder.addCase(getMyEventsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getMyEventsAsync.fulfilled, (state, action) => {
      state.myEvents = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMyEventsAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //getMyEventByIdAsync
    builder.addCase(getMyEventByIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getMyEventByIdAsync.fulfilled, (state, action) => {
      state.myEvent = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMyEventByIdAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //getMyEventsByUserIdAsync
    builder.addCase(getMyEventsByUserIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getMyEventsByUserIdAsync.fulfilled, (state, action) => {
      state.myEvents = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getMyEventsByUserIdAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //addMyEvent
    builder.addCase(addMyEventAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addMyEventAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(addMyEventAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //deleteMyEvent
    builder.addCase(deleteMyEventAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteMyEventAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteMyEventAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //updateMyEvent
    builder.addCase(updateMyEventAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateMyEventAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(updateMyEventAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default myEventsSlice.reducer;
