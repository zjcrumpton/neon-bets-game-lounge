import { useQuery } from 'react-query';
import { NeonQueryKey } from './QueryKey';
import { BASE_URL, ROOM_LIST } from '../constants/endpoints';
import axios from 'axios';
import { serverClient } from './client';

export const useRoomListQuery = () => {
    return useQuery(NeonQueryKey.ROOM_LIST, async () => {
        const res = await serverClient.get(ROOM_LIST);
        return res.data.rooms;
    });
};
