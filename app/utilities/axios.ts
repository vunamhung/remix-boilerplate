import axios from 'axios';
import { config } from '~/utilities';

export const http = axios.create({ baseURL: config.apiBaseUrl });
