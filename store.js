import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postAPi } from './services/post';

export const store = configureStore({
  reducer: {

    [postAPi.reducerPath]: postAPi.reducer,
  },
 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postAPi.middleware),
})


setupListeners(store.dispatch);