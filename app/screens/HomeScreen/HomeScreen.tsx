import hoistNonReactStatics from 'hoist-non-react-statics'
import i18next from 'i18next'
import React, {PureComponent} from 'react'
import {withTranslation, WithTranslation} from 'react-i18next'
import {StatusBar, Text, View} from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import {connect} from 'react-redux'
import {IconSource} from '../../assets'
import Box from '../../components/Common/Box/Box'
import Button from '../../components/Common/Button/Button'
import GradientButton from '../../components/Common/GradientButton/GradientButton'
import OutlineButton from '../../components/Common/OutlineButton/OutlineButton'
import {Colors} from '../../theme'
import {getLanguageCode} from '../../utils/multiLanguage'
import styles from './styles'

/**
 * Define navigation params
 */
export type HomeScreenParams = {}
export type NavigationType = NavigationStackProp<{}, HomeScreenParams>

/**
 * Define component props type
 */
export type HomeScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type HomeScreenState = {}

class HomeScreen extends PureComponent<
  HomeScreenProps & WithTranslation,
  HomeScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'HomeScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Home', // Set navbar text title
  }

  handleGoToNextScreen = () => {
    this.props.navigation.navigate('DemoNavigate')
  }

  handleGoToNextScreenWithParams = () => {
    this.props.navigation.navigate('DemoReceiveParams', {
      testParamName: 'Say hi',
    })
  }

  handleTestModalSuccess = () => {
    this.props.navigation.navigate('ModalSuccess', {
      title: 'Success !!',
      description: 'Description for success',
      button: [{text: 'OK', onPress: () => this.props.navigation.pop()}],
    })
  }

  handleTestModalFailure = () => {
    this.props.navigation.navigate('ModalFailure', {
      title: 'Error !!',
      description: 'Description for failure',
      button: [{text: 'OK', onPress: () => this.props.navigation.pop()}],
    })
  }

  handleTestActionSheet = () => {
    this.props.navigation.navigate('ModalActionSheet', {
      items: [
        {
          icon: IconSource.ARROW_RIGHT,
          title: 'Test item 1',
          onPress: () => {
            this.props.navigation.pop()
          },
        },
        {
          icon: IconSource.ARROW_RIGHT,
          title: 'Test item 2',
          onPress: () => {
            this.props.navigation.pop()
          },
        },
      ],
    })
  }

  handleTestModalConfirm = () => {
    this.props.navigation.navigate('ModalConfirm', {
      title: 'Are you confirm?',
      description: 'description',
      button: [
        {
          text: 'Cancel',
          onPress: () => this.props.navigation.pop(),
          textColor: Colors.BLUEYGREY,
        },
        {
          text: 'OK',
          onPress: () => this.props.navigation.pop(),
          textColor: Colors.AQUAMARINE,
        },
      ],
    })
  }

  handleSwitchLang = () => {
    const currentLang = getLanguageCode()
    i18next.changeLanguage(currentLang === 'en' ? 'th' : 'en')
  }

  render() {
    const {t} = this.props
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={Colors.AZURE} />
        <View style={styles.homeScreen}>
          <Box height={50} />
          <Text style={styles.homeScreenText}>{t('common:helloWorld')}</Text>
          <Box height={50} />
          <Button
            text="Test goto next screen"
            onPress={this.handleGoToNextScreen}
          />
          <Box height={8} />
          <Button
            text="Test goto next screen with params"
            onPress={this.handleGoToNextScreenWithParams}
          />
          <Box height={8} />
          <GradientButton
            text="Test modal success"
            onPress={this.handleTestModalSuccess}
          />
          <Box height={8} />
          <OutlineButton
            text="Test modal failure"
            onPress={this.handleTestModalFailure}
          />
          <Box height={8} />
          <OutlineButton
            text="Test modal action sheet"
            onPress={this.handleTestActionSheet}
          />
          <Box height={8} />
          <OutlineButton
            text="Test modal confirm"
            onPress={this.handleTestModalConfirm}
          />
          <Box height={8} />
          <Button text="Test switch language" onPress={this.handleSwitchLang} />
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

const HomeScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen)
const HomeScreenWithTranslate = withTranslation()(HomeScreenWithRedux)

export default hoistNonReactStatics(HomeScreenWithTranslate, HomeScreen)
