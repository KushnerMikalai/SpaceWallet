import { configureStore, Action, ConfigureStoreOptions } from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import rootReducer, { RootState } from './rootReducer'

export const createStore = (options?: ConfigureStoreOptions['preloadedState'] | undefined) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(),
    ...options,
  });

const store = createStore()

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./rootReducer', () => {
    const newRootReducer = require('./rootReducer').default
    store.replaceReducer(newRootReducer)
  })
}

export type AppDispatch = typeof store.dispatch
// export type RootState = ReturnType<typeof store.getState>
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export default store
