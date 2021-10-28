import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeTabHome from '../assets/icons/Home/home.svg'
import Message from '../assets/icons/Home/message.svg'
import MoreIcon from '../assets/icons/Home/more_icon.svg'
import New from '../assets/icons/Home/new.svg'
import Search from '../assets/icons/Home/search.svg'
import { Theme } from '../theme'
import HomeStack from './Stack/HomeStack'
import MessageStack from './Stack/MessageStack'
import PostStack from './Stack/PostStack'
import ProfileStack from './Stack/ProfileStack'
import SearchStack from './Stack/SearchStack'


const HomeTab = createBottomTabNavigator(
  {

    Home: {
      screen: HomeStack, // CADET_BLUE
      navigationOptions: (props) => ({
        tabBarIcon: ({ tintColor }) => (<HomeTabHome fill={tintColor} />),
        // tabBarVisible: props.navigation.state.routes[props.navigation.state.index].routeName === 'Home' ? true : false,
        title: "Home"
      }),

    },
    Search: {
      screen: SearchStack,
      navigationOptions: (props) => ({
        tabBarIcon: ({ tintColor }) => (<Search fill={tintColor} />),
        // tabBarVisible: props.navigation.state.routes[props.navigation.state.index].routeName === 'Search' ? true : false,
        title: "Search"
      }),
    },
    Post: {
      screen: PostStack,
      navigationOptions: (props) => ({
        tabBarIcon: ({ tintColor }) => (<New fill={tintColor} />),
        // tabBarVisible: props.navigation.state.routes[props.navigation.state.index].routeName === 'Post' ? true : false,
        title: "Post"
      }),
    },
    Message: {
      screen: MessageStack,
      navigationOptions: (props) => ({
        tabBarIcon: ({ tintColor }) => (<Message fill={tintColor} />),
        // tabBarVisible: props.navigation.state.routes[props.navigation.state.index].routeName === 'Message' ? true : false,
        title: "Message"
      }),
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: (props) => ({
        tabBarIcon: ({ tintColor }) => (<MoreIcon fill={tintColor} />),
        // tabBarVisible: props.navigation.state.routes[props.navigation.state.index].routeName === 'Profile' ? true : false,
        // title: "Profile"
      }),
    },
  },
  {
    initialRouteName: 'Home',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: Theme.variants.tabBar.activeTintColor,
      inactiveTintColor: Theme.variants.tabBar.inactiveTintColor,
      labelStyle: { ...Theme.variants.tabBar.labelStyle },
      style: {
        borderTopColor: Theme.variants.tabBar.borderTopColor,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Theme.variants.tabBar.backgroundColor,
      },
    },
  },
)

export default HomeTab
