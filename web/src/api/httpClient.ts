import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { API_HOST } from '../utils/consts'

interface RefreshToken {
  status: number
  data: {
    access_token: string
  }
}

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

abstract class HttpClient {
  protected accessToken: string = localStorage.getItem('accessToken') || ''
  protected refreshToken: string = localStorage.getItem('refreshToken') || ''
  protected readonly baseURL: string = API_HOST
  protected readonly instance: AxiosInstance

  public constructor() {
    this.instance = axios.create({
      withCredentials: true,
      baseURL: this.baseURL,
    })

    this._initializeRequestInterceptor()
    this._initializeResponseInterceptor()
  }

  private updateToken = () => {
    this.accessToken = localStorage.getItem('accessToken') || ''
    this.refreshToken = localStorage.getItem('refreshToken') || ''
  }

  private handleRequest = (config: AxiosRequestConfig) => {
    this.updateToken()

    if (this.accessToken) {
      config.headers['Authorization'] = `Bearer ${this.accessToken}`
    }
    return config
  }

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(this.handleRequest)
  }

  private async getRefreshToken(): Promise<RefreshToken> {
    const refreshTokenRequest = {
      refresh_token: this.refreshToken
    }

    return axios.post(`${this.baseURL}/token`, refreshTokenRequest)
  }

  private _handleResponse = ({ data }: AxiosResponse) => data

  protected _handleError = async (error: AxiosError) => {
    const originalRequest = error.config

    if (
      error?.response?.data?.status === 401 &&
      error?.response?.data?.message === 'unauthorized_user' &&
      this.refreshToken
    ) {
      try {
        const res = await this.getRefreshToken()
        if (res.status === 200) {
          this.accessToken = res.data.access_token
          localStorage.setItem('accessToken', this.accessToken)
          return this.instance(originalRequest)
        }
      } catch (e) {
        return Promise.reject(error)
      }
    } else {
      return Promise.reject(error)
    }
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(this._handleResponse, this._handleError)
  }
}

export default HttpClient
