---
inject: true
to: app/redux/Actions/<%= into %>.ts
before:   // auto-method
---

  <%= h.changeCase.camelCase(name) %> = () => async (dispatch: Dispatcher, getState: GetState) => {
    NavigationService.navigate('ModalLoading')

    try {
      const response = await <%= h.changeCase.pascalCase(into) %>.get<%= h.changeCase.pascalCase(name) %>()
      
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