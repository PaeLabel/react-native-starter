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
import AlertConfirm, {
  AlertConfirmProps,
} from '../../components/Common/AlertConfirm/AlertConfirm'

/**
 * Define navigation params
 */
export type ModalConfirmScreenParams = {}
export type NavigationType = NavigationStackProp<ModalConfirmScreenParams>

/**
 * Define component props type
 */
export type ModalConfirmScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type ModalConfirmScreenState = {}

class ModalConfirmScreen extends PureComponent<
  ModalConfirmScreenProps & WithTranslation,
  ModalConfirmScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'ModalConfirmScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'ModalConfirm', // Set navbar text title
  }

  render() {
    const {navigation} = this.props
    const {title, description, button} = navigation.state.params
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.modalConfirmScreen}>
          <AlertConfirm
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

const ModalConfirmScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalConfirmScreen)
const ModalConfirmScreenWithTranslate = withTranslation()(
  ModalConfirmScreenWithRedux,
)

export default hoistNonReactStatics(
  ModalConfirmScreenWithTranslate,
  ModalConfirmScreen,
)
