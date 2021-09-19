import hoistNonReactStatics from 'hoist-non-react-statics'
import React, { PureComponent } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack'
import { connect } from 'react-redux'
import Box from '../../components/Common/Box/Box'
import Button from '../../components/Common/Button/Button'
import styles from './styles'

/**
 * Define navigation params
 */
export type Screen3ScreenParams = {}
export type NavigationType = NavigationStackProp<{}, Screen3ScreenParams>

/**
 * Define component props type
 */
export type Screen3ScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type Screen3ScreenState = {}

class Screen3Screen extends PureComponent<
  Screen3ScreenProps & WithTranslation,
  Screen3ScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'Screen3Screen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Screen3', // Set navbar text title
  }

  goBack = () => {
    this.props.navigation.goBack()
    // or
    // this.props.navigation.pop()
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.screen3Screen}>
          <Box flex={1} justifyContent="center" padding={16}>
            <Button text="Back" onPress={this.goBack} />
          </Box>
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

const Screen3ScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen3Screen)
const Screen3ScreenWithTranslate = withTranslation()(Screen3ScreenWithRedux)

export default hoistNonReactStatics(Screen3ScreenWithTranslate, Screen3Screen)
