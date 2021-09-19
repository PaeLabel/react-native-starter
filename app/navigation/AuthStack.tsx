import {createStackNavigator} from 'react-navigation-stack'
import WelcomeScreen from '../screens/WelcomeScreen/WelcomeScreen'

const AuthStack = createStackNavigator(
  {
    Welcome: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Welcome',
    mode: 'card',
  },
)

export default AuthStack
