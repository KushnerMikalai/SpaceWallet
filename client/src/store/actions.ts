import api from '../api/api'
import { ActionContext, State, Commit } from 'vuex'

export const actions = {
  async getAppData({ commit, dispatch }: ActionContext<State, Commit>) {
    commit('setLoading', true)
    try {
      const res = await api.app.appData()

      if (res) {
        commit('setAppData', res)
      }
    } catch (e) {
      dispatch(
        'notification/create',
        {
          type: 'error',
          text: 'Server error get app data',
          close: true,
          key: 'itemsToast'
        },
        { root: true }
      )
    }
    commit('setLoading', false)
  }
}
