import { fetchApp } from "./slices/appSlice";
import { fetchUsers } from "./slices/userSlice";
import { fetchTodos, setTodoPage } from "./slices/todoSlice";
import { fetchCheckTokens, fetchLogin, fetchAuth, getAuthSuccess } from "./slices/authSlice";

const actionCreators = {
  fetchApp,
  fetchUsers,
  setTodoPage,
  fetchTodos,

  fetchLogin,
  fetchCheckTokens,
  fetchAuth,
  getAuthSuccess,
};

export default actionCreators;
