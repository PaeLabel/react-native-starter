import { UserStateDTO } from '../../dtos/UserDTO'
import ActionTypes, { IAction } from '../ActionTypes'

export const initialState: UserStateDTO = {
  user: {
    data: {},
    isLoading: false,
    errors: [],
  },
}

const UserReducer = (
  state: UserStateDTO = initialState,
  actions: IAction<UserStateDTO>,
) => {
  switch (actions.type) {
    case ActionTypes.USER_INIT: {
      return {
        ...initialState,
        ...actions.payload,
      }
    }
    case ActionTypes.USER_CHANGE: {
      return {
        ...state,
        ...actions.payload,
      }
    }
    default:
      return {
        ...state,
      }
  }
}

export default UserReducer
