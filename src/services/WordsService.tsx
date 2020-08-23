import axios from 'axios';
import {config} from '../config/Config';

const defaultHeader = {
  'Content-Type': 'application/json'
};

export const createWordCountsAndGetResults = async (payload: any): Promise<any> => {
  return axios.post(`${config.baseUrl.words}/count`, payload, {
      headers: defaultHeader
  }).catch(err => {
    throw err;
  });
}

export const getWords = async (): Promise<any> => {
  return axios.get(`${config.baseUrl.words}/count`, {
      headers: defaultHeader
  }).catch(err => {
    throw err;
  });;
}