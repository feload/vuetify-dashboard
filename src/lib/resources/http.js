import axios from 'axios';
import axiosCancel from 'axios-cancel';
import queryString from 'query-string';
import { t } from '../template';
import resourcesConf from './config';

axiosCancel(axios);

export default (api, ep, vars, params, accessToken, config) => {

  const qs = {
    env: process.env.NODE_ENV || "development"
  }

  const { baseURL, endPoints } = resourcesConf[api];
  let url = `${t(endPoints[ep], vars)}?${queryString.stringify(qs)}`;

  const instance = axios.create({
    url,
    baseURL,
    params,
    headers: {
      Authorization: `Bearer ${accessToken}`
    },
    ...config
  });

  return instance();
};