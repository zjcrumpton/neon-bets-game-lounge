import io from 'socket.io-client';
import * as env from '../constants/env';

export const socket = io(env.SOCKET_URL);
