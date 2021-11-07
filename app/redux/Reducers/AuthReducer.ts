import { AuthStateDTO } from '../../dtos/AuthDTO'
import ActionTypes, { IAction } from '../ActionTypes'

export const initialState: AuthStateDTO = {
  auth: {
    token: '',
    refreshToken: ''
  }
}

const AuthReducer = (
  state: AuthStateDTO = initialState,
  actions: IAction<AuthStateDTO>,
) => {
  switch (actions.type) {
    case ActionTypes.AUTH_INIT: {
      return {
        ...initialState,
        ...actions.payload,
      }
    }
    case ActionTypes.AUTH_CHANGE: {
      return {
        ...state,
        ...actions.payload,
      }
    }
    default:
      return state
  }
}

export default AuthReducer
