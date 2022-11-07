import axios from 'axios';
import { BASE_URL } from '../constants/endpoints';

export const serverClient = axios.create({
    baseURL: BASE_URL,
});
