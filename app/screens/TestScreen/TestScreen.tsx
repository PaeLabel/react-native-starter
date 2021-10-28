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
export type TestScreenParams = {}
export type NavigationType = NavigationStackProp<{}, TestScreenParams>

/**
 * Define component props type
 */
export type TestScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type TestScreenState = {}

class TestScreen extends PureComponent<
  TestScreenProps & WithTranslation,
  TestScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'TestScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Test', // Set navbar text title
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.testScreen}>
          <Text style={styles.testScreenText}>{title}</Text>
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

const TestScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TestScreen)
const TestScreenWithTranslate = withTranslation()(TestScreenWithRedux)

export default hoistNonReactStatics(
  TestScreenWithTranslate,
  TestScreen,
)
