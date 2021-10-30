import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import StackNone from '../../components/Stack/StackNone/StackNone'
import ChallengeScreen from '../../screens/ChallengeScreen/ChallengeScreen'
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

    Challenge: {
      screen: ChallengeScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (<StackNone navigationProp={navigation} />),
        headerRight: () => (<StackNone navigationProp={navigation} />),
        ...Theme.variants.header,
        title: "Challenge",

      })
    },
  },

  {
    initialRouteName: 'Home',
    mode: 'card'
  },
)

export default HomeStack
