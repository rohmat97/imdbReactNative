import { Platform } from 'react-native';
// import Config from 'react-native-config';

export const BASE_URL =
  Platform.OS === 'android'
    ? 'http://eddd7351.ngrok.io/'
    : 'http://eddd7351.ngrok.io/';
export const RESPONSE_STATUS = {
  SUCCESS: 200,
  UNAUTHORIZED: 401,
  BAD_REQUEST: 400,
  FORBIDDEN: 403,
};
