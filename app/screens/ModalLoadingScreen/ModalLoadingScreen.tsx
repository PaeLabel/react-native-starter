import hoistNonReactStatics from 'hoist-non-react-statics'
import React, {PureComponent} from 'react'
import {withTranslation, WithTranslation} from 'react-i18next'
import {View} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import {connect} from 'react-redux'
import Loading from '../../components/Common/Loading/Loading'
import styles from './styles'

/**
 * Define navigation params
 */
export type ModalLoadingScreenParams = {}
export type NavigationType = NavigationStackProp<{}, ModalLoadingScreenParams>

/**
 * Define component props type
 */
export type ModalLoadingScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type ModalLoadingScreenState = {}

class ModalLoadingScreen extends PureComponent<
  ModalLoadingScreenProps & WithTranslation,
  ModalLoadingScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'ModalLoadingScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'ModalLoading', // Set navbar text title
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.modalLoadingScreen}>
          <Loading />
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

const ModalLoadingScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalLoadingScreen)
const ModalLoadingScreenWithTranslate = withTranslation()(
  ModalLoadingScreenWithRedux,
)

export default hoistNonReactStatics(
  ModalLoadingScreenWithTranslate,
  ModalLoadingScreen,
)
