export interface User {
  name: string
  isAuth: boolean
}

export interface AppData {
  user: User
}

export interface State {
  appData: AppData
  loading: boolean
}

export default {
  appData: null,
  loading: true,
}
