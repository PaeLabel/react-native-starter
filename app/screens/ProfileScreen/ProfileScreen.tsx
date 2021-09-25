import React, {PureComponent} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux'
import {withTranslation, WithTranslation} from 'react-i18next'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import hoistNonReactStatics from 'hoist-non-react-statics'
import SafeAreaView from 'react-native-safe-area-view'

import styles from './styles'

/**
 * Define navigation params
 */
export type ProfileScreenParams = {}
export type NavigationType = NavigationStackProp<{}, ProfileScreenParams>

/**
 * Define component props type
 */
export type ProfileScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type ProfileScreenState = {}

class ProfileScreen extends PureComponent<
  ProfileScreenProps & WithTranslation,
  ProfileScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'ProfileScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Profile', // Set navbar text title
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.profileScreen}>
          <Text style={styles.profileScreenText}>{title}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

/**
 * Select redux state
 */
const mapStateToProps = (reduxState: any) => ({
  // Selected redux state hare
})

/**
 * Map action creators
 */
const mapDispatchToProps = {
  // Map action creators hare
}

const ProfileScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen)
const ProfileScreenWithTranslate = withTranslation()(ProfileScreenWithRedux)

export default hoistNonReactStatics(
  ProfileScreenWithTranslate,
  ProfileScreen,
)
