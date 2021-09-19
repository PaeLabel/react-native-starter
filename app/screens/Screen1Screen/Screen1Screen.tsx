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
export type Screen1ScreenParams = {}
export type NavigationType = NavigationStackProp<{}, Screen1ScreenParams>

/**
 * Define component props type
 */
export type Screen1ScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type Screen1ScreenState = {}

class Screen1Screen extends PureComponent<
  Screen1ScreenProps & WithTranslation,
  Screen1ScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'Screen1Screen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Screen1', // Set navbar text title
  }

  gotoScreen2 = () => {
    this.props.navigation.navigate('Screen2')
  }

  gotoScreen3 = () => {
    this.props.navigation.navigate('Screen3')
  }

  render() {
    const {title} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.screen1Screen}>
          <Box flex={1} justifyContent="center" padding={16}>
            <Button text="Go to screen 2" onPress={this.gotoScreen2} />
            <Box height={16} />
            <Button text="Go to screen 3" onPress={this.gotoScreen3} />
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

const Screen1ScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Screen1Screen)
const Screen1ScreenWithTranslate = withTranslation()(Screen1ScreenWithRedux)

export default hoistNonReactStatics(Screen1ScreenWithTranslate, Screen1Screen)
