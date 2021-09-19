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
export type DemoNavigateScreenParams = {}
export type NavigationType = NavigationStackProp<{}, DemoNavigateScreenParams>

/**
 * Define component props type
 */
export type DemoNavigateScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type DemoNavigateScreenState = {}

class DemoNavigateScreen extends PureComponent<
  DemoNavigateScreenProps & WithTranslation,
  DemoNavigateScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'DemoNavigateScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'DemoNavigate', // Set navbar text title
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.demoNavigateScreen}>
          <Text style={styles.demoNavigateScreenText}>{title}</Text>
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

const DemoNavigateScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoNavigateScreen)
const DemoNavigateScreenWithTranslate = withTranslation()(DemoNavigateScreenWithRedux)

export default hoistNonReactStatics(
  DemoNavigateScreenWithTranslate,
  DemoNavigateScreen,
)
