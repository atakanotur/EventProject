import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {InitialStateBase, MyEvent, Participant} from '../../types';
import {
  getAllParticipants,
  getParticipantsByMyEventId,
  getParticipantByUserId,
  getAttendedMyEventIds,
  addParticipant,
  deleteParticipant,
  updateParticipant,
} from '../../services';

export const getParticipantsAsync = createAsyncThunk(
  'participant/getParticipantsAsync',
  async () => {
    const result = await getAllParticipants();
    return await result;
  },
);

export const getParticipantsByEventIdAsync = createAsyncThunk(
  'participant/getParticipantsByEventIdAsync',
  async (eventId: number) => {
    const result = await getParticipantsByMyEventId(eventId);
    return await result;
  },
);

export const getParticipantByUserIdAsync = createAsyncThunk(
  'participant/getParticipantByUserIdAsync',
  async (userId: number) => {
    const result = await getParticipantByUserId(userId);
    return await result;
  },
);

export const getAttendedMyEventIdsAsync = createAsyncThunk(
  'participant/getAttendedMyEventIdsAsync',
  async (userId: number) => {
    const result = await getAttendedMyEventIds(userId);
    return await result;
  },
);

export const addParticipantAsync = createAsyncThunk(
  'participant/addParticipantAsync',
  async (participant: Participant) => {
    const result = await addParticipant(participant);
    return await result;
  },
);

export const deleteParticipantAsync = createAsyncThunk(
  'participant/deleteParticipantAsync',
  async (participant: Participant) => {
    const result = await deleteParticipant(participant);
    return await result;
  },
);

export const updateParticipantAsync = createAsyncThunk(
  'participant/updateParticipant',
  async (participant: Participant) => {
    const result = await updateParticipant(participant);
    return await result;
  },
);

interface InitialState extends InitialStateBase {
  participants: Participant[];
  participant: Participant | null;
  attendedMyEventIds: MyEvent[];
}

const initialState: InitialState = {
  participants: [],
  attendedMyEventIds: [],
  participant: null,
  isLoading: false,
  error: null,
};

const myEventTypesSlice = createSlice({
  name: 'myEventTypes',
  initialState,
  reducers: {},
  extraReducers(builder) {
    // getParticipantsAsync
    builder.addCase(getParticipantsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getParticipantsAsync.fulfilled, (state, action) => {
      state.participants = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getParticipantsAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    // getParticipantsByEventIdAsync
    builder.addCase(getParticipantsByEventIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      getParticipantsByEventIdAsync.fulfilled,
      (state, action: any) => {
        state.participants = action.payload.data;
        state.isLoading = false;
      },
    );
    builder.addCase(getParticipantsByEventIdAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    // getParticipantByUserIdAsync
    builder.addCase(getParticipantByUserIdAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(
      getParticipantByUserIdAsync.fulfilled,
      (state, action: any) => {
        state.participant = action.payload.data;
        state.isLoading = false;
      },
    );
    builder.addCase(getParticipantByUserIdAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    // getAttendedMyEventIdsAsync
    builder.addCase(getAttendedMyEventIdsAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getAttendedMyEventIdsAsync.fulfilled, (state, action) => {
      state.attendedMyEventIds = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(getAttendedMyEventIdsAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    // addParticipantAsync
    builder.addCase(addParticipantAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addParticipantAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(addParticipantAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    // deleteParticipantAsync
    builder.addCase(deleteParticipantAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(deleteParticipantAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(deleteParticipantAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    // updateParticipantAsync
    builder.addCase(updateParticipantAsync.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(updateParticipantAsync.fulfilled, state => {
      state.isLoading = false;
    });
    builder.addCase(updateParticipantAsync.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
  },
});

export default myEventTypesSlice.reducer;
