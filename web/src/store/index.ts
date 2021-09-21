import {
  Action,
  // MiddlewareAPI,
  // isRejectedWithValue,
  // Middleware,
  configureStore,
  ConfigureStoreOptions,
} from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import rootReducer, { RootState } from "./rootReducer";
import { setupListeners } from "@reduxjs/toolkit/query/react";

// export const createAxiosAuthMiddleware: Middleware =
//   (api: MiddlewareAPI) => (next) => (action) => {

// 	const auth = api.getState().auth;
// 	console.log(auth, 'asd');

// global.axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : null;

// if (isRejectedWithValue(action)) {
//   console.warn('We got a rejected action!')
// }

//     return next(action)
// }

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined,
) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        // middleware list
      ),
    ...options,
  });

const store = createStore();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./rootReducer", () => {
    const newRootReducer = require("./rootReducer").default;
    store.replaceReducer(newRootReducer);
  });
}

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export default store;
