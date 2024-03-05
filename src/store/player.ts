import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '.';
import {AudioData} from 'src/@types/audio';

interface Player {
  onGoingAudio: AudioData | null;
  onGoingList: AudioData[];
}

const initialState: Player = {
  onGoingAudio: null,
  onGoingList: [],
};

const slice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    updateOnGoingAudio(
      playerState,
      {payload}: PayloadAction<AudioData | null>,
    ) {
      playerState.onGoingAudio = payload;
    },

    updateOnGoingList(playerState, {payload}: PayloadAction<AudioData[]>) {
      playerState.onGoingList = payload;
    },
  },
});

// Seletor para obter o estado da notificação
// Se futuramente você quiser adicionar lógica de transformação, faça-a dentro do segundo argumento de createSelector.
export const getPlayerState = createSelector(
  (state: RootState) => state.player,
  playerState => playerState,
);

// Exportando as ações e o redutor
export const {updateOnGoingAudio, updateOnGoingList} = slice.actions;

export default slice.reducer;
