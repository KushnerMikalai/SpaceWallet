import api from '../api/api'
import { ActionContext } from 'vuex'

export const actions = {
  async getAppData({commit}: ActionContext<any, any>) {
    commit('setLoading', true)
    try {
      const res = await api.app.appData()

      if (res) {
        commit('setAppData', res)
      }
    } catch (e) {
      console.log('Error getAppData action') // TODO handle Error Front
    }
    commit('setLoading', false)
  },
}
