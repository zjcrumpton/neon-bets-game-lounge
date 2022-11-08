import create from 'zustand';
import { Room } from '../models/room';

interface AppStore {
  rooms: Room[],
  setRooms: (data: Room[]) => void,
}

export const useAppStore = create<AppStore>((set) => ({
  rooms: [],
  setRooms: (data: Room[]) => {
    set({ rooms: data });
  }
}));