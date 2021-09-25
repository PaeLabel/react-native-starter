import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import StackBackHome from '../../components/Stack/StackBackHome/StackBackHome'
import StackMenu from '../../components/Stack/StackMenu/StackMenu'
import SearchScreen from '../../screens/SearchScreen/SearchScreen'
import { Theme } from '../../theme'

const SearchStack = createStackNavigator(
  {
    Dashboard: {
      screen: SearchScreen,
      navigationOptions: ({ navigation }) => ({
        headerLeft: () => (<StackBackHome navigationProp={navigation} />),
        headerRight: () => (<StackMenu navigationProp={navigation} />),
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
