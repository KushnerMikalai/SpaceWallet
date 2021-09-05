import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../'
import appService from '../../api/services/appService'
interface AppState {
  account: any
  loading: boolean
  error: null | string
}

interface AppLoaded {
  account: any
}

const initialState: AppState = {
  account: null,
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
      const { account } = action.payload

      state.account = account
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
    const res = await appService.app()
    dispatch(getAppSuccess(res))
  } catch (err) {
    dispatch(getAppFailure(err.toString()))
  }
}
