import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from '../../screens/SearchScreen/SearchScreen'
import { Theme } from '../../theme'

const SearchStack = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        // headerLeft: () => (<StackBackHome navigationProp={navigation} />),
        // headerRight: () => (<StackMenu navigationProp={navigation} />),
        ...Theme.variants.header,
        title: "Search"
      })
    }
  },
  {
    initialRouteName: 'Search',
    mode: 'card'
  },
)

export default SearchStack
