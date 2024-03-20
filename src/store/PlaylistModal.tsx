import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '.';
import {AudioData} from 'src/@types/audio';

interface PlaylistModal {
  visible: boolean;
  selectedListId?: string;
}

const initialState: PlaylistModal = {
  visible: false,
};

const slice = createSlice({
  name: 'playlistModal',
  initialState,
  reducers: {
    updatePlaylistVisibility(playerState, {payload}: PayloadAction<boolean>) {
      playerState.visible = payload;
    },

    updateSelectedListId(playerState, {payload}: PayloadAction<string>) {
      playerState.selectedListId = payload;
    },
  },
});

// Seletor para obter o estado da notificação
// Se futuramente você quiser adicionar lógica de transformação, faça-a dentro do segundo argumento de createSelector.
export const getPlaylistModalState = createSelector(
  (state: RootState) => state.playlistModal,
  modalState => modalState,
);

// Exportando as ações e o redutor
export const {updatePlaylistVisibility, updateSelectedListId} = slice.actions;

export default slice.reducer;
