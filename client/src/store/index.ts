import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import { State, state } from './state'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const key: InjectionKey<Store<State>> = Symbol()

// import modules from './modules';

export const store = createStore<State>({
  state,
  actions,
  mutations,
  getters,
  // modules
});
