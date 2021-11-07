import hoistNonReactStatics from 'hoist-non-react-statics'
import React, { PureComponent } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { StatusBar, Text } from 'react-native'
import Configs from 'react-native-config'
import LinearGradient from 'react-native-linear-gradient'
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack'
import { connect } from 'react-redux'
import env from '../../config/project'
import InitialAppActions from '../../redux/Actions/InitialAppActions'
import { Colors } from '../../theme'
import styles from './styles'

/**
 * Define navigation params
 */
export type LoadingScreenParams = {}
export type NavigationType = NavigationStackProp<{}, LoadingScreenParams>

/**
 * Define component props type
 */
export type LoadingScreenProps = {
  title: string
  navigation: NavigationType

  bootstrap: any
}

/**
 * Define component state type
 */
type LoadingScreenState = {}

class LoadingScreen extends PureComponent<
  LoadingScreenProps & WithTranslation,
  LoadingScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'LoadingScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Loading', // Set navbar text title
  }

  componentDidMount() {
    const { navigation } = this.props

    this.props.bootstrap()

    // setTimeout(() => {
    //   navigation.navigate('Auth')
    // }, 1500)
  }

  render() {
    return (
      <LinearGradient
        colors={[Colors.AZURE, Colors.AQUAMARINE]}
        style={styles.container}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"

        />
        <Text style={styles.textBrand}>Loading...</Text>
        <Text style={styles.textVersion}>
          Version: {Configs.getConstants().VERSION_NAME} ({env.appBuildId}){' '}
          {env.env}
        </Text>
      </LinearGradient>
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
  ...InitialAppActions
}

const LoadingScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingScreen)
const LoadingScreenWithTranslate = withTranslation()(LoadingScreenWithRedux)

export default hoistNonReactStatics(LoadingScreenWithTranslate, LoadingScreen)
