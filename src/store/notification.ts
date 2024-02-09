import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

type NotificationType = 'error' | 'success';

interface Notification {
  message: string;
  type: NotificationType;
}

const initialState: Notification = {
  message: '',
  type: 'error', // Tipo padrão de notificação
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    // Correção do nome da ação de redutor para "updateNotification"
    updateNotification(
      state,
      action: PayloadAction<Notification>,
    ) {
      state.message = action.payload.message;
      state.type = action.payload.type;
    },
  },
});

// Seletor para obter o estado da notificação
// Se futuramente você quiser adicionar lógica de transformação, faça-a dentro do segundo argumento de createSelector.
export const getNotificationState = createSelector(
  (state: RootState) => state.notification,
  notificationState => notificationState,
);

// Exportando as ações e o redutor
export const { updateNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
