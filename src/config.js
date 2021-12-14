export const API_URL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3000/api';
export const AUTH_URL =
  process.env.NODE_ENV === 'production'
    ? '/auth'
    : 'http://localhost:3000/auth';