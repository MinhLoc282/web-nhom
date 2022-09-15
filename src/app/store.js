import { configureStore } from '@reduxjs/toolkit';
import projectReducer from '../features/project/projectSlice'

export const store = configureStore({
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    project: projectReducer,
  },
});
