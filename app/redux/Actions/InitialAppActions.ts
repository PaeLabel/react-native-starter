import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from 'jwt-decode'
import NavigationService from '../../services/NavigationService'
import { sleep } from '../../utils'
import ActionTypes from '../ActionTypes'
import { Dispatcher, GetState } from '../Store'
import UserActions from './UserActions'

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

  bootstrap = () => async (dispatch: Dispatcher, getState: GetState) => {
    const token = getState().AuthState.auth.token

    const isLogin = await AsyncStorage.getItem('LOGIN_STATE')

    if (!token || isLogin == '1') {
      await sleep(500)
      NavigationService.navigate('Auth')
      return
    }
    const payload: any = jwt_decode(token)

    console.log(payload)

    await dispatch(UserActions.getUser(payload._id))

    // await dispatch(this.loadAppData())

    await sleep(500)
    NavigationService.navigate('App')
  }
}

export default new InitialAppActions()

