import { Dispatch } from 'redux'
import api from '../../api'
import { AppAction, AppActionTypes } from '../../types/app'

export const fetchApp = () => {
  return async (dispatch: Dispatch<AppAction>) => {
    try {
      dispatch({ type: AppActionTypes.FETCH_APP})
      const res = await api.app.appData()
      dispatch({type: AppActionTypes.FETCH_APP_SUCCESS, payload: res})
    } catch (e) {
      dispatch({type: AppActionTypes.FETCH_APP_ERROR, payload: 'Error App loading'})
    }
  }
}

// export function setTodoPage(page: number): TodoAction {
//   return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
// }
