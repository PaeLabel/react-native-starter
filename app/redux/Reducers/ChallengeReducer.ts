import ActionTypes, {IAction} from '../ActionTypes'
import {ChallengeStateDTO} from '../../dtos/ChallengeDTO'

export const initialState: ChallengeStateDTO = {
  challenge: {
    data: {},
    isLoading: false,
    errors: [],
  },
}

const ChallengeReducer = (
  state: ChallengeStateDTO = initialState,
  actions: IAction<ChallengeStateDTO>,
) => {
  switch (actions.type) {
    case ActionTypes.CHALLENGE_INIT: {
      return {
        ...initialState,
        ...actions.payload,
      }
    }
    case ActionTypes.CHALLENGE_CHANGE: {
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

export default ChallengeReducer
