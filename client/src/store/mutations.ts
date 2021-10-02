import { MutationTree } from 'vuex'
import { State } from './state'

export enum MutationTypes {
  SET_APP = 'SET_APP',
  SET_LOADING_PAGE = 'SET_LOADING_PAGE',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_APP](state: S, payload: any): void
  [MutationTypes.SET_LOADING_PAGE](state: S, payload: boolean): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_APP](state, payload) {
    state.app = payload
  },
  [MutationTypes.SET_LOADING_PAGE](state, payload) {
    state.loadingPage = payload
  },
}
