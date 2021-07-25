import { State } from './state'

export const mutations = {
    increment (state: State) {
        state.count++
    },
}
