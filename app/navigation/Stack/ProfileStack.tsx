import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import StackBackHome from '../../components/Stack/StackBackHome/StackBackHome'
import StackMenu from '../../components/Stack/StackMenu/StackMenu'
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'
import { Theme } from '../../theme'

const ProfileStack = createStackNavigator(
  {
    Dashboard: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (<StackBackHome navigationProp={navigation} />),
        headerRight: () => (<StackMenu navigationProp={navigation} />),
        ...Theme.variants.header,
        title: "Profile"
      })
    }
  },
  {
    initialRouteName: 'Profile',
    mode: 'card'
  },
)

export default ProfileStack
