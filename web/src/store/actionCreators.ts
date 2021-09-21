import { fetchApp } from "./slices/appSlice";
import { fetchUsers } from "./slices/userSlice";
import { fetchTodos, setTodoPage } from "./slices/todoSlice";
import { fetchCheckTokens, fetchLogin } from "./slices/authSlice";

const actionCreators = {
  fetchApp,
  fetchUsers,
  setTodoPage,
  fetchTodos,

  fetchLogin,
  fetchCheckTokens,
};

export default actionCreators;
