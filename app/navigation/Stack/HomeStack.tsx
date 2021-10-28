import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import { Theme } from '../../theme'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: ({ navigation }) => ({
        // headerLeft: () => (<StackBackHome navigationProp={navigation} />),
        // headerRight: () => (<StackMenu navigationProp={navigation} />),
        ...Theme.variants.header,
        title: "Home"
      })
    },
  },
  {
    initialRouteName: 'Home',
    mode: 'card'
  },
)

export default HomeStack
