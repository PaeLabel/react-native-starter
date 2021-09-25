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
export type MessageScreenParams = {}
export type NavigationType = NavigationStackProp<{}, MessageScreenParams>

/**
 * Define component props type
 */
export type MessageScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type MessageScreenState = {}

class MessageScreen extends PureComponent<
  MessageScreenProps & WithTranslation,
  MessageScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'MessageScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Message', // Set navbar text title
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.messageScreen}>
          <Text style={styles.messageScreenText}>{title}</Text>
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

const MessageScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageScreen)
const MessageScreenWithTranslate = withTranslation()(MessageScreenWithRedux)

export default hoistNonReactStatics(
  MessageScreenWithTranslate,
  MessageScreen,
)
