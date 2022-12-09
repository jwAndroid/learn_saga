import axios from 'axios';
import Config from 'react-native-config';

const baseURL = __DEV__ ? Config.BASE_URL : '';

const client = axios.create({baseURL});

export function applyToken(jwt: string) {
  client.defaults.headers.common.Authorization = `Bearer ${jwt}`;
}

export function clearToken() {
  client.defaults.headers.common.Authorization = '';
}

export default client;
