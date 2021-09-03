import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import appReducer from './slices/appSlice'
import todoReducer from './slices/todoSlice'
import authReducer from './slices/authSlice'
import { appApi } from './services/appService'
import { authApi } from './services/authService'

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  todo: todoReducer,
  auth: authReducer,
  [appApi.reducerPath]: appApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
