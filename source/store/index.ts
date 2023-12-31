import {configureStore} from '@reduxjs/toolkit';

import authSlice from './auth';
import myEventsSlice from './myEvent';
import myEventTypesSlice from './myEventType';
import participantsSlice from './participant';
import usersSlice from './user';

const store = configureStore({
  reducer: {
    auth: authSlice,
    myEvents: myEventsSlice,
    myEventTypes: myEventTypesSlice,
    participants: participantsSlice,
    users: usersSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
