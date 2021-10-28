import React from 'react'
import { I18nextProvider, Translation } from 'react-i18next'
import { Portal } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from './components/Common/Loading/Loading'
import i18n from './config/i18n'
import { default as ConfigProject } from './config/project'
import RootNavigator from './navigation/RootNavigator'
import configureStore from './redux/Store'
import NavigationService from './services/NavigationService'

const { store, persistor } = configureStore()

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <Translation>
              {(t, { i18n }) => (
                <Portal.Host>
                  <React.Fragment>
                    <RootNavigator
                      ref={(navigatorRef) => {
                        NavigationService.setTopLevelNavigator(navigatorRef)
                      }}
                      uriPrefix={ConfigProject.scheme}
                      screenProps={{ t, i18n }}
                    />
                  </React.Fragment>
                </Portal.Host>
              )}
            </Translation>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  )
}

export default App
