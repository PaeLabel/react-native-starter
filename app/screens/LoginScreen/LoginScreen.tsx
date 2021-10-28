import hoistNonReactStatics from 'hoist-non-react-statics'
import React, { PureComponent } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView, StatusBar, Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack'
import { connect } from 'react-redux'
import Logo from '../../assets/icons/Login/beachseat.svg'
import Eye from '../../assets/icons/Login/eye.svg'
import GradientButton from '../../components/Common/GradientButton/GradientButton'
import { RootState } from '../../redux/Store'
import styles from './styles'

export type LoginScreenParams = {}
export type NavigationType = NavigationStackProp<{}, LoginScreenParams>

export type LoginScreenProps = {
  title: string
  navigation: NavigationType
}

type LoginScreenState = {}

class LoginScreen extends PureComponent<
  LoginScreenProps & WithTranslation,
  LoginScreenState
> {
  static defaultProps = {
    title: 'LoginScreen',
  }

  static navigationOptions: NavigationStackOptions = {
    title: 'Login',
  }

  state = {
    showPassword: true,
    email: '',
    password: '',
    loading: false,
  }

  async componentDidMount() {

  }

  onLogin = async () => {
    // await this.props.authLogin(this.state.email, this.state.password)
    this.props.navigation.navigate('App')
  }

  showPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  autoToPassword = () => {
    if (this.state.password == '') {
      this.input_password.focus()
    }
  }

  render() {
    return (
      <SafeAreaView style={styles.loginScreen} testID="LoginScreen">
        <StatusBar barStyle="dark-content" backgroundColor={"#FFF"} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.loginScreen}>
          <React.Fragment>
            <ScrollView
              scrollEnabled={false}
              style={[styles.loginScreen, { zIndex: 99 }]}
              bounces={false}
              scrollToOverflowEnabled={false}>
              <View style={styles.contentContainer}>
                <Logo width={200} height={100} />
                <Text style={styles.SubText}>{"Qualilife"}</Text>
                <View style={styles.content}>
                  <Text style={styles.inputText}>{"Email"}</Text>
                  <View style={styles.inputContainer}>
                    <TextInput
                      style={styles.inputs}
                      value={this.state.email}
                      onChangeText={(email) => this.setState({ email })}
                      keyboardType="email-address"
                      underlineColorAndroid="transparent"
                      autoCapitalize="none"
                      autoCorrect={false}
                      onEndEditing={this.autoToPassword}
                    />
                  </View>
                  <Text style={styles.inputText}>{"Password"}</Text>
                  <View style={styles.inputContainer}>
                    <View style={{ flex: 1 }}>
                      <TextInput
                        ref={(ref) => {
                          this.input_password = ref
                        }}
                        style={styles.inputs}
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        underlineColorAndroid="transparent"
                        secureTextEntry={this.state.showPassword}
                        autoCapitalize="none"
                        autoCorrect={false}
                      />
                    </View>
                    <View>
                      <TouchableOpacity
                        style={styles.eyeButton}
                        onPress={this.showPassword}>
                        {this.state.showPassword ?
                          <Eye />
                          :
                          <Eye />
                        }

                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={styles.btnContainer}>
                  <GradientButton
                    text={"Sign In"}
                    onPress={this.onLogin}
                    width={300}
                  />
                </View>
              </View>
            </ScrollView>
            {/* <AppVersion mode="dark" /> */}
          </React.Fragment>
        </KeyboardAvoidingView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = (reduxState: RootState) => {
  return {
  }
}

const mapDispatchToProps = {
}

const LoginScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen)
const LoginScreenWithTranslate = withTranslation()(LoginScreenWithRedux)

export default hoistNonReactStatics(LoginScreenWithTranslate, LoginScreen)
