import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {InitialStateBase, MyEvent, Participant} from '../../types';
import {
  getAllMyEvents,
  getMyEventById,
  getMyEventsByUserId,
  getActiveMyEvents,
  getAttendedMyEventsByUserId,
  addMyEvent,
  deleteMyEvent,
  updateMyEvent,
  joinMyEvent,
  leaveMyEvent,
} from '../../services';
import participant from '../participant';

export const getMyEventsAsync = createAsyncThunk(
  'myEvent/getMyEventsAsync',
  async () => {
    const result = await getAllMyEvents();
    return await result;
  },
);

export const getMyEventByIdAsync = createAsyncThunk(
  'myEvent/getMyEventByIdAsync',
  async (myEventId: number) => {
    const result = await getMyEventById(myEventId);
    return await result;
  },
);

export const getMyEventsByUserIdAsync = createAsyncThunk(
  'myEvent/getMyEventsByUserId',
  async (userId: number) => {
    const result = await getMyEventsByUserId(userId);
    return await result;
  },
);

export const getActiveMyEventsAsync = createAsyncThunk(
  'myEvent/getActiveMyEvents',
  async (userId: number) => {
    const result = await getActiveMyEvents(userId);
    return await result;
  },
);

export const getAttendedMyEventsByUserIdAsync = createAsyncThunk(
  'myEvent/getAttendedMyEventsByUserIdAsync',
  async (userId: number) => {
    const result = await getAttendedMyEventsByUserId(userId);
    return await result;
  },
);

export const addMyEventAsync = createAsyncThunk(
  'myEvent/addMyEventAsync',
  async (myEvent: MyEvent) => {
    const result = await addMyEvent(myEvent);
    return await result;
  },
);

export const deleteMyEventAsync = createAsyncThunk(
  'myEvent/deleteMyEventAsync',
  async (myEvent: MyEvent) => {
    const result = await deleteMyEvent(myEvent);
    return await result;
  },
);

export const updateMyEventAsync = createAsyncThunk(
  'myEvent/updateMyEventAsync',
  async (myEvent: MyEvent) => {
    const result = await updateMyEvent(myEvent);
    return await result;
  },
);

export const joinMyEventAsync = createAsyncThunk(
  'myEvent/joinMyEventAsync',
  async (participant: Participant) => {
    const result = await joinMyEvent(participant);
    return await result;
  },
);

export const leaveMyEventAsync = createAsyncThunk(
  'myEvent/leaveMyEventAsync',
  async (participant: Participant) => {
    const result = await leaveMyEvent(participant);
    return await result;
  },
);

interface InitialState extends InitialStateBase {
  allMyEvents: MyEvent[];
  activeMyEvents: MyEvent[];
  attendedMyEvents: MyEvent[];
  myEventsByUserId: MyEvent[];
  myEvent: MyEvent;
  myEventCreated: boolean;
  myEventDeleted: boolean;
  myEventUpdated: boolean;
}

const initialState: InitialState = {
  allMyEvents: [],
  activeMyEvents: [],
  attendedMyEvents: [],
  myEventsByUserId: [],
  myEvent: {} as MyEvent,
  myEventCreated: false,
  myEventDeleted: false,
  myEventUpdated: false,
  isLoading: false,
  error: null,
};

export const myEventsSlice = createSlice({
  name: 'myEvents',
  initialState: initialState,
  reducers: {
    setMyEventCreated: (state, action) => {
      state.myEventCreated = action.payload;
    },
    setMyEventDeleted: (state, action) => {
      state.myEventDeleted = action.payload;
    },
    setMyEventUpdated: (state, action) => {
      state.myEventUpdated = action.payload;
    },
  },
  extraReducers(builder) {
    //getMyEventsAsync
    builder.addCase(getMyEventsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getMyEventsAsync.fulfilled, (state, action) => {
      state.allMyEvents = action.payload.data;
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
      console.log('getMyEventsByUserIdAsync.action', action.payload.data);
      state.myEvent = action.payload.data;
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
      state.myEventsByUserId = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getMyEventsByUserIdAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //getActiveMyEvents
    builder.addCase(getActiveMyEventsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getActiveMyEventsAsync.fulfilled, (state, action) => {
      state.activeMyEvents = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getActiveMyEventsAsync.rejected, state => {
      state.isLoading = false;
    });
    //getAttendedMyEventsByUserIdAsync
    builder.addCase(getAttendedMyEventsByUserIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      getAttendedMyEventsByUserIdAsync.fulfilled,
      (state, action) => {
        state.attendedMyEvents = action.payload.data;
        state.isLoading = false;
      },
    );
    builder.addCase(
      getAttendedMyEventsByUserIdAsync.rejected,
      (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      },
    );
    //addMyEvent
    builder.addCase(addMyEventAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addMyEventAsync.fulfilled, state => {
      state.myEventCreated = true;
      state.isLoading = false;
    });
    builder.addCase(addMyEventAsync.rejected, (state, action) => {
      state.error = action.error;
      state.myEventCreated = false;
      state.isLoading = false;
    });
    //deleteMyEvent
    builder.addCase(deleteMyEventAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteMyEventAsync.fulfilled, state => {
      state.myEventDeleted = true;
      state.isLoading = false;
    });
    builder.addCase(deleteMyEventAsync.rejected, (state, action) => {
      state.error = action.error;
      state.myEventDeleted = false;
      state.isLoading = false;
    });
    //updateMyEvent
    builder.addCase(updateMyEventAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateMyEventAsync.fulfilled, state => {
      state.myEventUpdated = true;
      state.isLoading = false;
    });
    builder.addCase(updateMyEventAsync.rejected, (state, action) => {
      state.error = action.error;
      state.myEventUpdated = false;
      state.isLoading = false;
    });
    //joinMyEventAsync
    builder.addCase(joinMyEventAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(joinMyEventAsync.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(joinMyEventAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    //leaveMyEventAsync
    builder.addCase(leaveMyEventAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(leaveMyEventAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(leaveMyEventAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export const {setMyEventCreated, setMyEventDeleted, setMyEventUpdated} =
  myEventsSlice.actions;

export default myEventsSlice.reducer;
