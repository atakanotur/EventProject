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
  myEvents: [
    {
      id: 1000,
      userId: 1007,
      myEventTypeId: 0,
      name: 'event1',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 25,
      participantCount: 10,
    },
    {
      id: 1001,
      userId: 1007,
      myEventTypeId: 1,
      name: 'event2',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 55,
      participantCount: 15,
    },
    {
      id: 1002,
      userId: 1005,
      myEventTypeId: 2,
      name: 'event3',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 35,
      participantCount: 6,
    },
    {
      id: 1003,
      userId: 1005,
      myEventTypeId: 3,
      name: 'event4',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 45,
      participantCount: 16,
    },
    {
      id: 1004,
      userId: 1005,
      myEventTypeId: 4,
      name: 'event5',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 45,
      participantCount: 16,
    },
    {
      id: 1005,
      userId: 1005,
      myEventTypeId: 5,
      name: 'event6',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 45,
      participantCount: 16,
    },
    {
      id: 1006,
      userId: 1005,
      myEventTypeId: 6,
      name: 'event7',
      address: 'address,address / address',
      date: new Date('2025-08-05T09:56:19.197'),
      participantLimit: 45,
      participantCount: 16,
    },
  ],
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
