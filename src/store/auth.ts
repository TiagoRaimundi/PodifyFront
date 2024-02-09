import {createSlice, PayloadAction, createSelector} from '@reduxjs/toolkit';
import {RootState} from '.';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  verified: boolean;
  avatar?: string;
  followers: number;
  followings: number;
}

interface AuthState {
  profile: UserProfile | null;
  loggedIn: boolean;
  busy: boolean;
}

const initialState: AuthState = {
  profile: null,
  loggedIn: false,
  busy: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateProfile(authState, {payload}: PayloadAction<UserProfile | null>) {
      authState.profile = payload;
    },
    updateLoggedInState(authState, {payload}: PayloadAction<boolean>) {
      authState.loggedIn = payload;
    },
    updateBusyInState(authState, {payload}: PayloadAction<boolean>) {
      authState.busy = payload;
    },
  },
});

export const {updateProfile, updateLoggedInState, updateBusyInState} =
  authSlice.actions;

// Ajuste este seletor para corresponder à localização do AuthState no seu RootState
export const getAuthState = (state: RootState) => state.auth;

export const selectLoggedInStatus = createSelector(
  [getAuthState],
  authState => authState.loggedIn,
);

export const selectUserProfile = createSelector(
  [getAuthState],
  authState => authState.profile,
);

export default authSlice.reducer;
