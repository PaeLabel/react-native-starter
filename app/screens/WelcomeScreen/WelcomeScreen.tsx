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
export type WelcomeScreenParams = {}
export type NavigationType = NavigationStackProp<{}, WelcomeScreenParams>

/**
 * Define component props type
 */
export type WelcomeScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type WelcomeScreenState = {}

class WelcomeScreen extends PureComponent<
  WelcomeScreenProps & WithTranslation,
  WelcomeScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'WelcomeScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Welcome', // Set navbar text title
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.welcomeScreen}>
          <Text style={styles.welcomeScreenText}>{title}</Text>
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

const WelcomeScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomeScreen)
const WelcomeScreenWithTranslate = withTranslation()(WelcomeScreenWithRedux)

export default hoistNonReactStatics(
  WelcomeScreenWithTranslate,
  WelcomeScreen,
)
