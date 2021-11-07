import AsyncStorage from '@react-native-community/async-storage'
import i18next from 'i18next'
import AuthService from '../../services/AuthService'
import NavigationService from '../../services/NavigationService'
import { getErrorMessageByBackend } from '../../utils/error'
import ActionTypes from '../ActionTypes'
import { Dispatcher, GetState } from '../Store'
import InitialAppActions from './InitialAppActions'

export interface IAuthActions {
  getAuth: () => void
  // auto-interface
}

class AuthActions implements IAuthActions {
  getAuth = () => async (dispatch: Dispatcher, getState: GetState) => {
    NavigationService.navigate('ModalLoading')

    try {
      const response = await AuthService.getAuth()

      dispatch({
        type: ActionTypes.AUTH_CHANGE,
        payload: { data: response.data },
      })
      NavigationService.pop()
    } catch (error) {
      NavigationService.pop()
      NavigationService.navigate('ModalFailure', {
        title: i18next.t('common:oops'),
        description: getErrorMessageByBackend(error),
        button: [
          {
            text: i18next.t('common:ok'),
            onPress: () => NavigationService.pop(),
          },
        ],
      })
    }
  }

  authLogin = (email: string, password: string) => async (
    dispatch: Dispatcher,
    getState: GetState,
  ) => {
    NavigationService.navigate('ModalLoading')
    // await sleep(2000)

    try {
      const response = await AuthService.authLogin(email, password)

      if (response === undefined || response === null || !response) {
        NavigationService.replace('ModalConfirm', {
          title: 'Login',
          description: 'Invalid  Email or Password.',
          button: [
            {
              text: 'OK',
              isOutline: true,
              onPress: () => NavigationService.pop(),
            },
          ],
        })
      } else {
        dispatch({
          type: ActionTypes.AUTH_CHANGE,
          payload: {
            auth: { token: response.token, refreshToken: response.refreshToken },
          },
        })

        AsyncStorage.setItem('LOGIN_STATE', '0')

        await dispatch(InitialAppActions.bootstrap())
        NavigationService.pop()
      }
    } catch (error) {

      NavigationService.pop()
      NavigationService.navigate('ModalFailure', {
        title: i18next.t('common:login'),
        description: error.status != 401 ? getErrorMessageByBackend(error) : 'Invalid  Email or Password.',
        button: [
          {
            text: i18next.t('common:ok'),
            onPress: () => NavigationService.pop(),
          },
        ],
      })
    }
  }

  refreshToken = (refresh_token: string) => async (
    dispatch: Dispatcher,
    getState: GetState,
  ) => {
    try {
      const response = await AuthService.refreshToken(refresh_token)

      dispatch({
        type: ActionTypes.AUTH_CHANGE,
        payload: { auth: { token: response.token, refreshToken: refresh_token } },
      })

      return response.token
    } catch (error) {
      dispatch({
        type: ActionTypes.AUTH_CHANGE,
        payload: { auth: { token: '', refreshToken: '' } },
      })

      NavigationService.navigate('ModalFailure', {
        title: i18next.t('common:login_timeout'),
        description: getErrorMessageByBackend(error),
        button: [
          {
            text: i18next.t('common:ok'),
            onPress: () => NavigationService.navigate('Auth'),
          },
        ],
      })
    }
  }

  logout = () => async (dispatch: Dispatcher, getState: GetState) => {
    try {
      dispatch({
        type: ActionTypes.LOGOUT,
        payload: { auth: { token: '', refreshToken: '' } },
      })


      dispatch({
        type: ActionTypes.USER_CHANGE,
        payload: { user: { data: {} } },
      })

      AsyncStorage.setItem('LOGIN_STATE', '1')

      // NotificationService.unregister()
      NavigationService.navigate('Auth')
    } catch (error) { }
  }

  // auto-method
}

export default new AuthActions()
