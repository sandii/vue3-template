import axios from 'axios';
import { ElMessage } from 'element-plus';
import { Param, Res } from '/@/types';

export const formatUrl = (
  url: string,
  param: Param = {},
): string => {
  const usp = new window.URLSearchParams(param as any);
  const jointer = url.includes('?') ? '&' : '?';
  return url + jointer + usp.toString();
};
const instance = axios.create({
  baseURL: '',
});
instance.interceptors.request.use(config => {
  return config;
});
instance.interceptors.response.use(
  ({ data }) => {
    const {
      code,
      message,
    } = data as Res;
    if (code !== 200) {
      ElMessage.warning(message || '');
    }
    return data;
  },
  err => Promise.reject(err),
);
export const get = (
  url: string,
  param: Param = {},
  opt: any = {},
): Promise<any> => {
  const u = formatUrl(url, param);
  return instance.get(u, opt);
};
export const post = (
  url: string,
  param: Param = {},
  opt: any = {},
): Promise<any> => {
  return instance.post(url, param, opt);
};
