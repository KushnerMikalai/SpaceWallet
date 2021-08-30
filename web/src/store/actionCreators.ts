import { fetchApp } from './slices/appSlice'
import { fetchUsers } from './slices/userSlice'
import { setTodoPage, fetchTodos } from './slices/todoSlice'
import { fetchLogin, fetchCheckTokens } from './slices/authSlice'

const actionCreators = {
  fetchApp,
  fetchUsers,
  setTodoPage,
  fetchTodos,

  fetchLogin,
  fetchCheckTokens,
}

export default actionCreators
