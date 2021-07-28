import { State, AppData } from './state'

export const mutations = {
  setAppData(state: State, payload: AppData) {
    state.appData = payload
  },
  setLoading(state: State, payload: boolean) {
    state.loading = payload
  }
}
