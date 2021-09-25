import { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import state, { State } from "./state";

export const key: InjectionKey<Store<State>> = Symbol()

// import mutations from './root/mutations';
// import actions from './root/actions';
// import getters from './root/getters';
// import modules from './modules';

export const store = createStore<State>({
  state,
  // getters,
  // actions,
  // mutations,
  // modules
});
