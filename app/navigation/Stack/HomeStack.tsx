import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import StackBackHome from '../../components/Stack/StackBackHome/StackBackHome'
import StackMenu from '../../components/Stack/StackMenu/StackMenu'
import SearchScreen from '../../screens/SearchScreen/SearchScreen'
import { Theme } from '../../theme'

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (<StackBackHome navigationProp={navigation} />),
        headerRight: () => (<StackMenu navigationProp={navigation} />),
        ...Theme.variants.header,
        title: "Home"
      })
    }
  },
  {
    initialRouteName: 'Home',
    mode: 'card'
  },
)

export default HomeStack
