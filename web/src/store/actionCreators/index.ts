import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

const actionCreators = {
  ...TodoActionCreators,
  ...UserActionCreators,
}

export default actionCreators
