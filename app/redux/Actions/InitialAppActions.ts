import ActionTypes from '../ActionTypes'

export interface IInitialAppActions {
  loadAppData: (isLoaded: boolean) => void
}

export class InitialAppActions implements IInitialAppActions {
  loadAppData = (isLoaded: boolean) => (dispatch: any, getState: any) => {
    dispatch({
      type: ActionTypes.INITIAL_DATA,
      payload: {
        isLoaded,
      },
    })
  }
}

export default new InitialAppActions()
