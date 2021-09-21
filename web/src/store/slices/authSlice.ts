import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "../";
import { setTokens } from "../../api/apiClient";
import authService from "../../api/services/authService";

interface AuthState {
  accessToken: null | string;
  refreshToken: null | string;
  loading: boolean;
  error: null | string;
  isAuthenticated: boolean;
}

interface AuthLogin {
  access_token: string;
  refresh_token: string;
}

interface LoginForm {
  email: string;
  password: string;
}

const initialState: AuthState = {
  accessToken: null,
  refreshToken: null,
  error: null,
  loading: false,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuthStart(state) {
      state.loading = true;
      state.error = null;
    },
    getAuthSuccess(state, action: PayloadAction<AuthLogin>) {
      const { access_token, refresh_token } = action.payload;
      if (access_token) {
        setTokens(access_token);
      }

      state.accessToken = access_token;
      state.refreshToken = refresh_token;
      state.loading = false;
      state.error = null;
    },
    getAuthFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getAuthStart, getAuthSuccess, getAuthFailure } =
  authSlice.actions;
export default authSlice.reducer;

export const fetchLogin = (form: LoginForm): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getAuthStart());
      const res = await authService.login(form);
      dispatch(getAuthSuccess(res));
    } catch (err) {
      dispatch(getAuthFailure(err.toString()));
    }
  };

export const fetchCheckTokens = (): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getAuthStart());
      const res = await authService.checkTokens();
      dispatch(getAuthSuccess(res));
    } catch (err) {
      dispatch(getAuthFailure(err.toString()));
    }
  };
