import { lazy } from "react";
import Admin from "./pages/Admin";
// import Login from "./pages/Login";
import Index from "./pages/Index";
import { ADMIN_ROUTE, INDEX_ROUTE, LOGIN_ROUTE, SIGN_UP } from "./utils/consts";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];

export const publicRoutes = [
  {
    name: "home",
    path: INDEX_ROUTE,
    Component: Index,
  },
  {
    name: "login",
    path: LOGIN_ROUTE,
    Component: lazy(() => import("./pages/Login")),
  },
  // {
  //   path: SIGN_UP,
  //   Component: Login,
  // },
];
