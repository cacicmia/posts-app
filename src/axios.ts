import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
export interface IAxiosProps {
  url: string
  requestConfig?: AxiosRequestConfig
  payload?: any
}

const baseUrl = process.env.REACT_APP_BACKEND_URL! || 'https://jsonplaceholder.typicode.com'
export const axiosInstance: AxiosInstance = axios.create({
  baseURL: baseUrl
})
