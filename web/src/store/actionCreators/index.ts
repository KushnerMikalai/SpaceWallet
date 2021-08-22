import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'
import * as AppActionCreators from './app'

const actionCreators = {
  ...TodoActionCreators,
  ...UserActionCreators,
  ...AppActionCreators,
}

export default actionCreators
