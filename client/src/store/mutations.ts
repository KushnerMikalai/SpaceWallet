import { State } from './state'

export const mutations = {
  setAppData(state: State, payload: any) {
    state.appData = payload
  },
  setLoading(state: State, payload: boolean) {
    state.loading = payload
  }
}
