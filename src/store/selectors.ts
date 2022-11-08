import { Room } from '../models/room';
import { useAppStore } from './store';

export const selectRooms = useAppStore((state) => state.rooms);

export const selectRoomById = (id: string): Room | null => {
  const res = selectRooms.filter(room => room.id === id);
  return res.length === 1 ? res[0] : null
};
