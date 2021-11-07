import i18next from 'i18next'
import ChallengeService from '../../services/ChallengeService'
import NavigationService from '../../services/NavigationService'
import { getErrorMessageByBackend } from '../../utils/error'
import ActionTypes from '../ActionTypes'
import { Dispatcher, GetState } from '../Store'

export interface IChallengeActions {
  getChallengeByUser: (userId: string) => void
  // auto-interface
}

class ChallengeActions implements IChallengeActions {
  getChallengeByUser = (userId: string) => async (dispatch: Dispatcher, getState: GetState) => {
    NavigationService.navigate('ModalLoading')

    try {
      const response = await ChallengeService.getChallenge(userId)

      dispatch({
        type: ActionTypes.CHALLENGE_CHANGE,
        payload: { userChallenge: response.data },
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

export default new ChallengeActions()
