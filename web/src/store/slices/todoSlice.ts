import axios from 'axios'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../'

interface TodoState {
  todos: any[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

const initialState: TodoState = {
  todos: [],
  page: 1,
  error: null,
  limit: 10,
  loading: false
}

const app = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    getTodoStart(state) {
      state.loading = true
      state.error = null
    },
    getTodoSuccess(state, action: PayloadAction<any[]>) {
      state.todos = action.payload
      state.loading = false
      state.error = null
    },
    getTodoFailure(state, action: PayloadAction<string>) {
      state.loading = false
      state.error = action.payload
    },
    setTodoPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    }
  }
})

export const { getTodoStart, getTodoSuccess, getTodoFailure, setTodoPage } = app.actions
export default app.reducer

export const fetchTodos = (page: number, limit: number): AppThunk => async dispatch => {
  try {
    dispatch(getTodoStart())
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos', {
      params: {_page: page, _limit: limit}
    })
    dispatch(getTodoSuccess(res.data))
  } catch (err) {
    dispatch(getTodoFailure(err))
  }
}
