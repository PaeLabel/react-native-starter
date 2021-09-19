---
to: app/redux/Actions/<%= h.changeCase.pascalCase(name) %>Actions.ts
---
import i18next from 'i18next'
import NavigationService from '../../services/NavigationService'
import <%= h.changeCase.pascalCase(name) %>Service from '../../services/<%= h.changeCase.pascalCase(name) %>Service'
import {getErrorMessageByBackend} from '../../utils/error'
import ActionTypes from '../ActionTypes'
import {Dispatcher, GetState} from '../Store'

export interface I<%= h.changeCase.pascalCase(name) %>Actions {
  get<%= h.changeCase.pascalCase(name) %>: () => void
  // auto-interface
}

class <%= h.changeCase.pascalCase(name) %>Actions implements I<%= h.changeCase.pascalCase(name) %>Actions {
  get<%= h.changeCase.pascalCase(name) %> = () => async (dispatch: Dispatcher, getState: GetState) => {
    NavigationService.navigate('ModalLoading')

    try {
      const response = await <%= h.changeCase.pascalCase(name) %>Service.get<%= h.changeCase.pascalCase(name) %>()
      
      dispatch({
        type: ActionTypes.<%= h.changeCase.constantCase(name) %>_CHANGE,
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

export default new <%= h.changeCase.pascalCase(name) %>Actions()
