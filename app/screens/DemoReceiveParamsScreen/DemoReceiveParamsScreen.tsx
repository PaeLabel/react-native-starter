import hoistNonReactStatics from 'hoist-non-react-statics'
import React, {PureComponent} from 'react'
import {withTranslation, WithTranslation} from 'react-i18next'
import {Text, View} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import {connect} from 'react-redux'
import styles from './styles'

/**
 * Define navigation params
 */
export type DemoReceiveParamsScreenParams = {
  testParamName: string
}
export type NavigationType = NavigationStackProp<
  {},
  DemoReceiveParamsScreenParams
>

/**
 * Define component props type
 */
export type DemoReceiveParamsScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type DemoReceiveParamsScreenState = {}

class DemoReceiveParamsScreen extends PureComponent<
  DemoReceiveParamsScreenProps & WithTranslation,
  DemoReceiveParamsScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'DemoReceiveParamsScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'DemoReceiveParams', // Set navbar text title
  }

  render() {
    const {title, navigation} = this.props
    const testParamName = navigation.state.params?.testParamName

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.demoReceiveParamsScreen}>
          <Text
            style={
              styles.demoReceiveParamsScreenText
            }>{`Param value: ${testParamName}`}</Text>
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

const DemoReceiveParamsScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(DemoReceiveParamsScreen)
const DemoReceiveParamsScreenWithTranslate = withTranslation()(
  DemoReceiveParamsScreenWithRedux,
)

export default hoistNonReactStatics(
  DemoReceiveParamsScreenWithTranslate,
  DemoReceiveParamsScreen,
)
