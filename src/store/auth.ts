import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

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
}

const initialState: AuthState = {
  profile: null,
  loggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    updateProfile(state, action: PayloadAction<UserProfile | null>) {
      state.profile = action.payload;
    },
    updateLoggedInState(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload;
    },
  },
});

export const { updateProfile, updateLoggedInState } = authSlice.actions;

// Ajuste este seletor para corresponder à localização do AuthState no seu RootState
export const getAuthState = (state: RootState) => state.auth;

export const selectLoggedInStatus = createSelector(
  [getAuthState],
  (authState) => authState.loggedIn
);

export const selectUserProfile = createSelector(
  [getAuthState],
  (authState) => authState.profile
);

export default authSlice.reducer;
