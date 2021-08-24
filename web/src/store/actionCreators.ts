import { fetchApp } from './slices/appSlice'
import { fetchUsers } from './slices/userSlice'
import { setTodoPage, fetchTodos } from './slices/todoSlice'

const actionCreators = {
  fetchApp,
  fetchUsers,
  setTodoPage,
  fetchTodos,
}

export default actionCreators
