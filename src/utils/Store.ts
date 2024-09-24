import { configureStore } from '@reduxjs/toolkit';

import infectionReducer from '../features/intectionSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    userReducer,
    infectionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['infections/search/fulfilled', 'user/info/fulfilled'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
