import hoistNonReactStatics from 'hoist-non-react-statics'
import moment from 'moment'
import React, { PureComponent } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack'
import { connect } from 'react-redux'
import Box from '../../components/Common/Box/Box'
import OutlineButton from '../../components/Common/OutlineButton/OutlineButton'
import Colors from '../../theme/Colors'
import styles from './styles'


/**
 * Define navigation params
 */
export type ChallengeScreenParams = {}
export type NavigationType = NavigationStackProp<{}, ChallengeScreenParams>

/**
 * Define component props type
 */
export type ChallengeScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type ChallengeScreenState = {
  second: number
}

class ChallengeScreen extends PureComponent<
  ChallengeScreenProps & WithTranslation,
  ChallengeScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'ChallengeScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'Challenge', // Set navbar text title
  }

  state = {
    second: 0,
  }

  componentDidMount() {
    let startAccept = (1635589997) + 64800
    let now = moment().unix()

    let chkTime = startAccept - now

    if (chkTime <= 0) {
      console.log("END TIME")
    }

    this.setState({ second: chkTime });

    if (chkTime > 0) {
      this.setState({ second: chkTime });
      this.timer = setInterval(() => {
        this.countDown();
      }, 1000);
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }


  countDown = () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.second - 1;
    this.setState({
      second: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.timer);

      // Send to screen Fail or alert
    }
  }

  convertHMS(sc: number) {
    const sec = sc // convert value to number if it's string



    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds

    // add 0 if value < 10; Example: 2 => 02
    return "" + (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds)
  }

  handleFinish = (() => {
    console.log("FINIST")
  })

  handleFail = (() => {
    console.log("FAIL")
  })


  render() {
    const { title } = this.props

    let challenge_title = "Test 1"
    let challenge_desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy"

    let remaining = this.convertHMS(this.state.second)

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.challengeScreen}>
          <Box height={80} borderColor={"#000"} borderWidth={3} borderRadius={10} padding={20}>
            <Text style={styles.txtTitle}>
              {remaining} Hours Remaining
            </Text>
          </Box>

          <Box marginTop={20} height={150} borderColor={"#000"} borderWidth={3} borderRadius={10} padding={20}>
            <Text style={styles.txtChallengeTitle}>
              TODAY'S CHALLENGE IS {challenge_title}
            </Text>
            <Text style={styles.txtChallenge}>
              Description: {challenge_desc}
            </Text>
          </Box>

          <View style={styles.boxBtn}>
            <OutlineButton text="FINISH" onPress={this.handleFinish} width={150} color={Colors.BLACK} />
            <Box width={20} />
            <OutlineButton text="FAIL" onPress={this.handleFail} width={150} color={Colors.BLACK} />
          </View>
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

const ChallengeScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ChallengeScreen)
const ChallengeScreenWithTranslate = withTranslation()(ChallengeScreenWithRedux)

export default hoistNonReactStatics(
  ChallengeScreenWithTranslate,
  ChallengeScreen,
)
