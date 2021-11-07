import InitialAppStateDTO from '../../dtos/InitialAppStateDTO'
import ActionTypes, { IAction } from '../ActionTypes'

export const initialState: InitialAppStateDTO = {
  isLoaded: false,
  hasViewWalkThrough: false,
  isAppDataLoaded: false,
}

const InitialAppReducer = (
  state = initialState,
  actions: IAction<InitialAppStateDTO>,
) => {
  switch (actions.type) {
    case ActionTypes.INITIAL_DATA: {
      return {
        ...state,
        ...actions.payload,
      }
    }
    default:
      return state
  }
}

export default InitialAppReducer
