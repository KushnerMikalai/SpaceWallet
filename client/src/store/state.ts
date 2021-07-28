export interface User {
  name: string
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
