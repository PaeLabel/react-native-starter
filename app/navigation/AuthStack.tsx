import { createStackNavigator } from 'react-navigation-stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen'

const AuthStack = createStackNavigator(
  {
    Welcome: {
      screen: LoginScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Welcome',
    mode: 'card',
    defaultNavigationOptions: {
      cardStyle: {
        backgroundColor: 'transparent',
      },
      animationEnabled: false,
    },
  },
)

export default AuthStack
