import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../'
import { appService } from '../../api'

interface AppState {
  app: any
  loading: boolean
  error: null | string
}

interface AppLoaded {
  account: any
}

const initialState: AppState = {
  app: {},
  loading: false,
  error: null
}

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    getAppStart(state) {
      state.loading = true
      state.error = null
    },
    getAppSuccess(state, action: PayloadAction<AppLoaded>) {
      state.app = action.payload
      state.loading = false
      state.error = null
    },
    getAppFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { getAppStart, getAppSuccess, getAppFailure } = app.actions
export default app.reducer

export const fetchApp = (): AppThunk => async dispatch => {
  try {
    dispatch(getAppStart())
    const app = await appService.appData()
    dispatch(getAppSuccess(app))
  } catch (err) {
    dispatch(getAppFailure(err))
  }
}
