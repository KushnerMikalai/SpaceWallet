import { MutationTree } from 'vuex'
import { State } from './state'

export enum MutationTypes {
  SET_APP = 'SET_APP',
}

export type Mutations<S = State> = {
  [MutationTypes.SET_APP](state: S, payload: any): void
}

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_APP](state: State, payload: any) {
    state.app = payload
  },
}
