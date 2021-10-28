import { createStackNavigator } from 'react-navigation-stack'
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'
import { Theme } from '../../theme'

const ProfileStack = createStackNavigator(
  {
    Profile: {
      screen: ProfileScreen,
      navigationOptions: ({ navigation }) => ({
        // headerLeft: () => (<StackBackHome navigationProp={navigation} />),
        // headerRight: () => (<StackMenu navigationProp={navigation} />),
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
