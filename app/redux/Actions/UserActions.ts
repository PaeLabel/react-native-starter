import i18next from 'i18next'
import NavigationService from '../../services/NavigationService'
import UserService from '../../services/UserService'
import { getErrorMessageByBackend } from '../../utils/error'
import ActionTypes from '../ActionTypes'
import { Dispatcher, GetState } from '../Store'

export interface IUserActions {
  getUser: (id: string) => void
  // auto-interface
}

class UserActions implements IUserActions {
  getUser = (id: string) => async (dispatch: Dispatcher, getState: GetState) => {
    NavigationService.navigate('ModalLoading')

    try {
      const response = await UserService.getUser(id)

      dispatch({
        type: ActionTypes.USER_CHANGE,
        payload: { user: { data: response.data } },
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

export default new UserActions()
