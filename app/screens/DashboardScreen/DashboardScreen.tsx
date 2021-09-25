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
export type DashboardScreenParams = {}
export type NavigationType = NavigationStackProp<{}, DashboardScreenParams>

/**
 * Define component props type
 */
export type DashboardScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type DashboardScreenState = {}

class DashboardScreen extends PureComponent<
  DashboardScreenProps & WithTranslation,
  DashboardScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'DashboardScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Dashboard', // Set navbar text title
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.dashboardScreen}>
          <Text style={styles.dashboardScreenText}>{title}</Text>
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

const DashboardScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DashboardScreen)
const DashboardScreenWithTranslate = withTranslation()(DashboardScreenWithRedux)

export default hoistNonReactStatics(
  DashboardScreenWithTranslate,
  DashboardScreen,
)
