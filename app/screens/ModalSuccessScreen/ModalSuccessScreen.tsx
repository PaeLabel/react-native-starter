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
import ModalSuccessContent from '../../components/Common/ModalSuccessContent/ModalSuccessContent'
import styles from './styles'

/**
 * Define navigation params
 */
export type ModalSuccessScreenParams = {}
export type NavigationType = NavigationStackProp<ModalSuccessScreenParams>

/**
 * Define component props type
 */
export type ModalSuccessScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type ModalSuccessScreenState = {}

class ModalSuccessScreen extends PureComponent<
  ModalSuccessScreenProps & WithTranslation,
  ModalSuccessScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'ModalSuccessScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'ModalSuccess', // Set navbar text title
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
    return true
  }

  render() {
    const {navigation} = this.props
    const {title, description, button} = navigation.state.params
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.modalSuccessScreen}>
          <ModalSuccessContent
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

const ModalSuccessScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalSuccessScreen)
const ModalSuccessScreenWithTranslate = withTranslation()(
  ModalSuccessScreenWithRedux,
)

export default hoistNonReactStatics(
  ModalSuccessScreenWithTranslate,
  ModalSuccessScreen,
)
