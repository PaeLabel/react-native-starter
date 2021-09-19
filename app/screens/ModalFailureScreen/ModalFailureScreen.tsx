import hoistNonReactStatics from 'hoist-non-react-statics'
import React, {PureComponent} from 'react'
import {withTranslation, WithTranslation} from 'react-i18next'
import {BackHandler, View} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import {connect} from 'react-redux'
import ModalFailureContent from '../../components/Common/ModalFailureContent/ModalFailureContent'
import styles from './styles'

/**
 * Define navigation params
 */
export type ModalFailureScreenParams = {}
export type NavigationType = NavigationStackProp<ModalFailureScreenParams>

/**
 * Define component props type
 */
export type ModalFailureScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type ModalFailureScreenState = {}

class ModalFailureScreen extends PureComponent<
  ModalFailureScreenProps & WithTranslation,
  ModalFailureScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'ModalFailureScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'ModalFailure', // Set navbar text title
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleOnBack)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleOnBack)
  }

  handleOnBack = () => {
    if (this.props.navigation.state?.params?.onBack) {
      this.props.navigation.state?.params?.onBack()
    }
    this.props.navigation.pop()
    return true
  }

  render() {
    const {navigation} = this.props
    const {title, description, button} = navigation.state.params
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.modalFailureScreen}>
          <ModalFailureContent
            title={title}
            description={description}
            button={button}
          />
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

const ModalFailureScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalFailureScreen)
const ModalFailureScreenWithTranslate = withTranslation()(
  ModalFailureScreenWithRedux,
)

export default hoistNonReactStatics(
  ModalFailureScreenWithTranslate,
  ModalFailureScreen,
)
