import i18next from 'i18next'
import AuthService from '../../services/AuthService'
import NavigationService from '../../services/NavigationService'
import {getErrorMessageByBackend} from '../../utils/error'
import ActionTypes from '../ActionTypes'
import {Dispatcher, GetState} from '../Store'

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
        payload: {data: response.data},
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

  // auto-method
}

export default new AuthActions()
