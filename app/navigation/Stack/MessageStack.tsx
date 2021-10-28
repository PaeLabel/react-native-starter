import { createStackNavigator } from 'react-navigation-stack'
import MessageScreen from '../../screens/MessageScreen/MessageScreen'
import { Theme } from '../../theme'

const MessageStack = createStackNavigator(
  {
    Message: {
      screen: MessageScreen,
      navigationOptions: ({ navigation }) => ({
        // headerLeft: () => (<StackBackHome navigationProp={navigation} />),
        // headerRight: () => (<StackMenu navigationProp={navigation} />),
        ...Theme.variants.header,
        title: "Message"
      })
    }
  },
  {
    initialRouteName: 'Message',
    mode: 'card'
  },
)

export default MessageStack
