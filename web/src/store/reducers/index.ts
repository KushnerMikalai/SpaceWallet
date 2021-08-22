import { combineReducers } from 'redux'
import { todoReducer } from './todoReducer'
import { userReducer } from './userReducer'
import { appReducer } from './appReducer'

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
  app: appReducer
})

export type RootState = ReturnType<typeof rootReducer>
