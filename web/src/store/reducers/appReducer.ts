import { AppAction, AppActionTypes, AppState } from '../../types/app'

const initialState: AppState = {
  app: {},
  loading: false,
  error: null
}

export const appReducer = (state = initialState, action: AppAction): AppState =>  {
  switch (action.type) {
    case AppActionTypes.FETCH_APP:
      return {...state, loading: true}
    case AppActionTypes.FETCH_APP_SUCCESS:
      return {...state, loading: false, app: action.payload}
    case AppActionTypes.FETCH_APP_ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}
