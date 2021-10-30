import hoistNonReactStatics from 'hoist-non-react-statics'
import React, { PureComponent } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { StatusBar, View } from 'react-native'
import { Text } from 'react-native-paper'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack'
import { connect } from 'react-redux'
import Box from '../../components/Common/Box/Box'
import OutlineButton from '../../components/Common/OutlineButton/OutlineButton'
import { Colors } from '../../theme'
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
type HomeScreenState = {
  showChallenge: boolean
  challenge: boolean
}

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

  state = {
    showChallenge: true,
    challenge: false
  };

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Home', // Set navbar text title
  }

  handleAccept = () => {
    this.props.navigation.navigate('ModalConfirm', {
      title: 'Chanllenge confirm?',
      description: 'You want to confirm this challenge ?',
      button: [
        {
          text: 'Cancel',
          onPress: () => this.props.navigation.pop(),
          textColor: Colors.BLUEYGREY,
        },
        {
          text: 'OK',
          onPress: () => this.props.navigation.navigate('Challenge'),
          textColor: Colors.AQUAMARINE,
        },
      ],
    })
  }

  handleSkip = () => {

    console.log("SKIP")
  }

  render() {
    const { title } = this.props

    if (this.state.challenge) { this.props.navigation.navigate('Challenge') }

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={Colors.BLACK} />
        <View style={styles.homeScreen}>

          {this.state.showChallenge &&
            <>
              <Box height={200} backgroundColor={"#000"} borderRadius={10} padding={20}>
                <Text style={styles.txtTitle}>
                  TODAY’s CHALLENGE IS
                </Text>
                <Text style={styles.txtChallenge}>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                </Text>
              </Box>

              <View style={styles.boxBtn}>
                <OutlineButton text="Accept" onPress={this.handleAccept} width={150} color={Colors.BLACK} />
                <Box width={20} />
                <OutlineButton text="Skip" onPress={this.handleSkip} width={150} color={Colors.BLACK} />
              </View>
            </>
          }


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
