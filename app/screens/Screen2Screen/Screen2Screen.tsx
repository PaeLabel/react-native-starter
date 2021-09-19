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
import Box from '../../components/Common/Box/Box'
import Button from '../../components/Common/Button/Button'
import styles from './styles'

/**
 * Define navigation params
 */
export type Screen2ScreenParams = {}
export type NavigationType = NavigationStackProp<{}, Screen2ScreenParams>

/**
 * Define component props type
 */
export type Screen2ScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type Screen2ScreenState = {}

class Screen2Screen extends PureComponent<
  Screen2ScreenProps & WithTranslation,
  Screen2ScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'Screen2Screen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Screen2', // Set navbar text title
  }

  gotoScreen3 = () => {
    this.props.navigation.navigate('Screen3')
  }

  replaceScreen3 = () => {
    this.props.navigation.replace('Screen3')
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
        <View style={styles.screen2Screen}>
          <Box flex={1} justifyContent="center" padding={16}>
            <Button text="Go to screen 3" onPress={this.gotoScreen3} />
            <Box height={16} />
            <Button text="Replace screen 3" onPress={this.replaceScreen3} />
            <Box height={16} />
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

const Screen2ScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen2Screen)
const Screen2ScreenWithTranslate = withTranslation()(Screen2ScreenWithRedux)

export default hoistNonReactStatics(Screen2ScreenWithTranslate, Screen2Screen)
