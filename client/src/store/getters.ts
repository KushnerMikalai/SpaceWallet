import { State } from './state'

export const getters = {
  isAuth(state: State) {
    return state.app?.account?.isAuth
  }
}
