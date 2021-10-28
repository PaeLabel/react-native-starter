import hoistNonReactStatics from 'hoist-non-react-statics'
import React, { PureComponent } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack'
import { connect } from 'react-redux'
import styles from './styles'


/**
 * Define navigation params
 */
export type SearchScreenParams = {}
export type NavigationType = NavigationStackProp<{}, SearchScreenParams>

/**
 * Define component props type
 */
export type SearchScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type SearchScreenState = {}

class SearchScreen extends PureComponent<
  SearchScreenProps & WithTranslation,
  SearchScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'SearchScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Search', // Set navbar text title
  }

  render() {
    const { title } = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.searchScreen}>
          <Text style={styles.searchScreenText}>{title} TEST</Text>
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

const SearchScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchScreen)
const SearchScreenWithTranslate = withTranslation()(SearchScreenWithRedux)

export default hoistNonReactStatics(
  SearchScreenWithTranslate,
  SearchScreen,
)
