import { get, post } from '/@/http';
import { Param, Res } from '/@/types';

export const getReq = (
  param: Param = {},
): Promise<Res> => {
  const url = '';
  return get(url, param);
};
export const postReq = (
  param: Param = {},
): Promise<Res> => {
  const url = '';
  return post(url, param);
};