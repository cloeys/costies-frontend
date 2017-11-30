import axios from 'axios';

import { API_BASE } from 'src/config/constants';

// Resources for /posts endpoint on API
export const costsResource = axios.create({
  baseURL: `${API_BASE}/costs`
});

export const loginResource = axios.create({
  baseURL: `${API_BASE}/auth/login`
});

export const usersResource = axios.create({
  baseURL: `${API_BASE}/users`
});
