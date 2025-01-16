import { io, Socket } from 'socket.io-client';
import { store } from '../store/store';
import { updateRoomState } from '../store/roomSclice'

let socket: Socket | null = null;

export const initializeSocket = () => {
  socket = io('http://localhost:3001', {
    transports: ['websocket'],
    reconnection: true,
    reconnectionAttempts: 5,
  });

  socket.on('connect', () => {
    console.log('Connected to WebSocket server');
  });

  socket.on('initialState', (initialState) => {
    console.log('Received initial state:', initialState);
    store.dispatch(updateRoomState(initialState));
  });

  socket.on('roomUpdate', (updatedState) => {
    console.log('Received room update:', updatedState);
    store.dispatch(updateRoomState(updatedState));
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from WebSocket server');
  });

  socket.on('connect_error', (error) => {
    console.error('Connection error:', error);
  });
};

export const emitRoomUpdate = (roomState: any) => {
  if (socket && socket.connected) {
    console.log('Emitting room update:', roomState);
    socket.emit('roomUpdate', roomState);
  } else {
    console.error('Socket not connected. Unable to emit room update.');
  }
};

export const getSocket = (): Socket | null => {
  return socket;
};

