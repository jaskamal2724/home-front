import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoomState {
  bedroom: {
    light1: boolean;
    light2: boolean;
  };
  kitchen: {
    light1: boolean;
    light2: boolean;
  };
}

const initialState: RoomState = {
  bedroom: {
    light1: false,
    light2: false,
  },
  kitchen: {
    light1: false,
    light2: false,
  },
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    toggleLight: (state, action: PayloadAction<{ room: 'bedroom' | 'kitchen'; light: 'light1' | 'light2' }>) => {
      const { room, light } = action.payload;
      state[room][light] = !state[room][light];
    },
    toggleBothLights: (state, action: PayloadAction<{ room: 'bedroom' | 'kitchen'; value: boolean }>) => {
      const { room, value } = action.payload;
      state[room].light1 = value;
      state[room].light2 = value;
    },
    toggleAllLights: (state, action: PayloadAction<boolean>) => {
      const value = action.payload;
      state.bedroom.light1 = value;
      state.bedroom.light2 = value;
      state.kitchen.light1 = value;
      state.kitchen.light2 = value;
    },
    updateRoomState: (_state, action: PayloadAction<RoomState>) => {
      return action.payload;
    },
  },
});

export const { toggleLight, toggleBothLights, toggleAllLights, updateRoomState } = roomSlice.actions;
export default roomSlice.reducer;

