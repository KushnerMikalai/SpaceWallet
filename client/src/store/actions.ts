import { ActionContext, ActionTree } from 'vuex';
import { State } from './state'
import { MutationTypes, Mutations } from './mutations'
import appService from '../api/services/appService';

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>
} & Omit<ActionContext<State, State>, 'commit'>

export enum ActionTypes {
  FETCH_APP = 'FETCH_APP',
}

export interface Actions {
  [ActionTypes.FETCH_APP](
    { commit }: AugmentedActionContext,
  ): void
}

export const actions: ActionTree<State, State> & Actions = {
  async [ActionTypes.FETCH_APP]({ commit }) {
    try {
      const res = await appService.app()
      commit(MutationTypes.SET_APP, res)
    } catch (err) {
      console.log(err, 'Error get App'); // TODO
    }
  },
}
