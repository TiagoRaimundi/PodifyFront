import { configureStore, combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth';
// Importe outros reducers aqui

const rootReducer = combineReducers({
  auth: authReducer,
  // Adicione outros reducers aqui, por exemplo:
  // user: userReducer,
  // posts: postsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
