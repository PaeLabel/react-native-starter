import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import StackBackHome from '../../components/Stack/StackBackHome/StackBackHome'
import StackMenu from '../../components/Stack/StackMenu/StackMenu'
import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import TestScreen from '../../screens/TestScreen/TestScreen'
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

    Home2: {
      screen: TestScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (<StackBackHome navigationProp={navigation} />),
        headerRight: () => (<StackMenu navigationProp={navigation} />),
        ...Theme.variants.header,
        title: "Home2",

      })
    },
  },

  {
    initialRouteName: 'Home',
    mode: 'card'
  },
)

export default HomeStack
