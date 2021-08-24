import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../'

export interface UserState {
  users: any[]
  loading: boolean
  error: null | string
}

// interface UsersLoaded {
//   account: any
// }

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
}

const app = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUsersStart(state) {
      state.loading = true
      state.error = null
    },
    getUsersSuccess(state, action: PayloadAction<any[]>) {
      state.users = action.payload
      state.loading = false
      state.error = null
    },
    getUsersFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    }
  }
})

export const { getUsersStart, getUsersSuccess, getUsersFailure } = app.actions
export default app.reducer

export const fetchUsers = (): AppThunk => async dispatch => {
  try {
    dispatch(getUsersStart())
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    setTimeout(() => {
      dispatch(getUsersSuccess(response.data))
    }, 500);
  } catch (err) {
    dispatch(getUsersFailure(err))
  }
}
