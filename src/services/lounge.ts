import { useQuery, useQueryClient } from '@tanstack/react-query';
import { Room } from '../models/room';
import { NeonQueryKey } from './QueryKey';

export const useRoomData = () => {
    console.log("@@ USING ROOM DATA @@");
    const qc = useQueryClient();
    return useQuery<Partial<Room>>([NeonQueryKey.ROOM_DATA], () => {
        return qc.getQueryData([NeonQueryKey.ROOM_DATA]) ?? {};
    }, {
        onSuccess: (data) => data,
        staleTime: Infinity,
    });
};
