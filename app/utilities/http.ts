import axios from 'axios';
import { config } from '~/utilities';

const http = axios.create({ baseURL: config.apiBaseUrl });

export { http };
