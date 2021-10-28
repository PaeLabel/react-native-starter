import { createStackNavigator } from 'react-navigation-stack'
import PostScreen from '../../screens/PostScreen/PostScreen'
import { Theme } from '../../theme'

const PostStack = createStackNavigator(
  {
    Post: {
      screen: PostScreen,
      navigationOptions: ({ navigation }) => ({
        // headerLeft: () => (<StackBackHome navigationProp={navigation} />),
        // headerRight: () => (<StackMenu navigationProp={navigation} />),
        ...Theme.variants.header,
        title: "Post"
      })
    }
  },
  {
    initialRouteName: 'Post',
    mode: 'card'
  },
)

export default PostStack
