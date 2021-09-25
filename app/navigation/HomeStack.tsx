import { createStackNavigator } from 'react-navigation-stack'
import DemoNavigateScreen from '../screens/DemoNavigateScreen/DemoNavigateScreen'
import DemoReceiveParamsScreen from '../screens/DemoReceiveParamsScreen/DemoReceiveParamsScreen'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import Screen1Screen from '../screens/Screen1Screen/Screen1Screen'
import Screen2Screen from '../screens/Screen2Screen/Screen2Screen'
import Screen3Screen from '../screens/Screen3Screen/Screen3Screen'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    DemoNavigate: {
      screen: DemoNavigateScreen,
    },
    DemoReceiveParams: {
      screen: DemoReceiveParamsScreen,
    },
    Screen1: {
      screen: Screen1Screen,
    },
    Screen2: {
      screen: Screen2Screen,
    },
    Screen3: {
      screen: Screen3Screen,
    },
    // auto-plugin
  },
  {
    initialRouteName: 'Screen1',
    mode: 'card',
  },
)

export default HomeStack
