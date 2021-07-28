import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import state, { State } from './state'
import { mutations } from './mutations'
import { modules } from './modules'
import { actions } from './actions'
import { getters } from './getters'

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state,
  mutations,
  actions,
  getters,
  modules,
  strict: true,
})
