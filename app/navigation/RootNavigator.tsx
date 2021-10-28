import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from '../screens/LoadingScreen/LoadingScreen'
import ModalActionSheetScreen from '../screens/ModalActionSheetScreen/ModalActionSheetScreen'
import ModalConfirmScreen from '../screens/ModalConfirmScreen/ModalConfirmScreen'
import ModalFailureScreen from '../screens/ModalFailureScreen/ModalFailureScreen'
import ModalLoadingScreen from '../screens/ModalLoadingScreen/ModalLoadingScreen'
import ModalSuccessScreen from '../screens/ModalSuccessScreen/ModalSuccessScreen'
import { Colors } from '../theme'
import AuthStack from './AuthStack'
import HomeTab from './HomeTab'

const RootNavigator = createAppContainer(
  createStackNavigator(
    {
      AllAppStack: {
        screen: createSwitchNavigator(
          {
            Starter: LoadingScreen,
            Auth: AuthStack,
            App: {
              screen: HomeTab,
              path: '',
            },
          },
          {
            initialRouteName: 'Starter',
            navigationOptions: {
              cardStyle: {
                backgroundColor: Colors.WHITE,
              },
            },
          },
        ),
        path: '',
      },
      ModalLoading: {
        screen: ModalLoadingScreen,
      },
      ModalConfirm: {
        screen: ModalConfirmScreen,
      },
      ModalSuccess: {
        screen: ModalSuccessScreen,
      },
      ModalFailure: {
        screen: ModalFailureScreen,
        path: 'payment/failure',
      },
      ModalActionSheet: {
        screen: ModalActionSheetScreen,
      },
    },
    {
      initialRouteName: 'AllAppStack',
      mode: 'modal',
      headerMode: 'none',
      defaultNavigationOptions: {
        cardStyle: {
          backgroundColor: Colors.RGBA(Colors.BLACK, 0.5),
        },
        animationEnabled: false,
      },
    },
  ),
)

export default RootNavigator
