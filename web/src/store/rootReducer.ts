import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice'
import appReducer from './slices/appSlice'
import todoReducer from './slices/todoSlice'

const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer
