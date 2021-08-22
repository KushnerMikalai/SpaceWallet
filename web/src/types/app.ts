export interface AppState {
  app: any
  loading: boolean
  error: null | string
}

export enum AppActionTypes {
  FETCH_APP = 'FETCH_APP',
  FETCH_APP_SUCCESS = 'FETCH_APP_SUCCESS',
  FETCH_APP_ERROR = 'FETCH_APP_ERROR'
}

interface FetchAppAction {
  type: AppActionTypes.FETCH_APP
}

interface FetchAppSuccessAction {
  type: AppActionTypes.FETCH_APP_SUCCESS
  payload: any[]
}

interface FetchAppErrorAction {
  type: AppActionTypes.FETCH_APP_ERROR
  payload: string
}

export type AppAction = FetchAppAction | FetchAppSuccessAction | FetchAppErrorAction
