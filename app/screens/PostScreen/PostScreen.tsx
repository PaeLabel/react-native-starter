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
export type PostScreenParams = {}
export type NavigationType = NavigationStackProp<{}, PostScreenParams>

/**
 * Define component props type
 */
export type PostScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type PostScreenState = {}

class PostScreen extends PureComponent<
  PostScreenProps & WithTranslation,
  PostScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'PostScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Post', // Set navbar text title
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.postScreen}>
          <Text style={styles.postScreenText}>{title}</Text>
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

const PostScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostScreen)
const PostScreenWithTranslate = withTranslation()(PostScreenWithRedux)

export default hoistNonReactStatics(
  PostScreenWithTranslate,
  PostScreen,
)
