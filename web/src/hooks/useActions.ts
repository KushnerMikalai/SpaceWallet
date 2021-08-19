import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as UserActionCreator from '../store/actionCreators/user'

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(UserActionCreator, dispatch)
}
