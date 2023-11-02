import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {InitialStateBase, Participant} from '../../types';
import {
  getAllParticipants,
  getParticipantsByEventId,
  getParticipantByUserId,
  addParticipant,
  deleteParticipant,
  updateParticipant,
} from '../../services';

export const getParticipantsAsync = createAsyncThunk(
  'participant/getParticipantsAsync',
  async () => {
    const result = await getAllParticipants();
    return result;
  },
);

export const getParticipantsByEventIdAsync = createAsyncThunk(
  'participant/getParticipantsByEventIdAsync',
  async (eventId: number) => {
    const result = await getParticipantsByEventId(eventId);
    return result;
  },
);

export const getParticipantByUserIdAsync = createAsyncThunk(
  'participant/getParticipantByUserIdAsync',
  async (userId: number) => {
    const result = await getParticipantByUserId(userId);
    return result;
  },
);

export const addParticipantAsync = createAsyncThunk(
  'participant/addParticipantAsync',
  async (participant: Participant) => {
    const result = await addParticipant(participant);
    return result;
  },
);

export const deleteParticipantAsync = createAsyncThunk(
  'participant/deleteParticipantAsync',
  async (participant: Participant) => {
    const result = await deleteParticipant(participant);
    return result;
  },
);

export const updateParticipantAsync = createAsyncThunk(
  'participant/updateParticipant',
  async (participant: Participant) => {
    const result = await updateParticipant(participant);
    return result;
  },
);

interface InitialState extends InitialStateBase {
  participants: Participant[];
  participant: Participant | null;
}

const initialState: InitialState = {
  participants: [
    {
      id: 0,
      myEventId: 1,
      userId: 4,
    },
    {
      id: 0,
      myEventId: 2,
      userId: 4,
    },
    {
      id: 0,
      myEventId: 3,
      userId: 4,
    },
    {
      id: 0,
      myEventId: 4,
      userId: 4,
    },
    {
      id: 0,
      myEventId: 5,
      userId: 4,
    },
    {
      id: 0,
      myEventId: 6,
      userId: 4,
    },
    {
      id: 0,
      myEventId: 2,
      userId: 4,
    },
    {
      id: 0,
      myEventId: 3,
      userId: 4,
    },
  ],
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
