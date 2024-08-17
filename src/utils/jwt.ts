import { jwtDecode } from 'jwt-decode';

export const decodedToken = (token: string) => {
  if (!token) {
    console.error('Token is undefined or empty');
    return null;
  }

  try {
    return jwtDecode(token);
  } catch (error) {
    console.error('Invalid token:', error);
    return null;
  }
};
