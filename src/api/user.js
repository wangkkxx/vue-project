import { get, post } from './http';
import urls from './urls';

const {
  user: { info }
} = urls

const userData = JSON.parse(localStorage.getItem('user'))

export const getUserInfo = data => get(info, {...userData, ...data});
export const postInfo = data => post(info, data);