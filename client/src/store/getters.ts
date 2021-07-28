import { State } from './state'

export const getters = {
  isAuthenticated(state: State) {
    return state?.appData?.user?.isAuth
  }
}
