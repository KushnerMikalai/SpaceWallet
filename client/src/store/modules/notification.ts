import { nanoid } from 'nanoid'
import { ActionContext, Commit, State } from 'vuex'

export interface NotificationType {
  id: number
  text: string
  type: string
  close: boolean
  time: number
  key: string
}

export interface NotificationStateType {
  items: NotificationType[]
  itemsToast: NotificationType[]
}

export const notification = {
  namespaced: true,
  state: () => ({
    items: [],
    itemsToast: []
  }),
  mutations: {
    setItems(state: NotificationStateType, payload: { items: NotificationType[]; key: string }) {
      state[payload.key] = payload.items
    }
  },
  actions: {
    create({ commit, state, dispatch }: ActionContext<State, Commit>, item: NotificationType) {
      const id = item.id || nanoid()
      const key = item.key || 'items'
      const items = [...state[key]]

      items.push({
        id,
        type: item.type || 'info',
        close: item.close || false,
        text: item.text || ''
      })
      commit('setItems', { items, key })

      if (item.time) {
        setTimeout(() => {
          dispatch('close', { id, key })
        }, item.time)
      }
    },
    close({ commit, state }: ActionContext<State, Commit>, { id, key }: { id: number; key: string }) {
      const items = [...state[key]].filter(item => item.id !== id)
      commit('setItems', { items, key })
    }
  }
}
