import hoistNonReactStatics from 'hoist-non-react-statics'
import React, { PureComponent } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Image, ScrollView, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp
} from 'react-navigation-stack'
import { connect } from 'react-redux'
import LogoutIcon from '../../assets/icons/Profile/logout_icon.svg'
import EditIcon from '../../assets/icons/Profile/pen_icon.svg'
import { UserDTO } from '../../dtos/UserDTO'
import AuthActions from '../../redux/Actions/AuthActions'
import { Theme } from '../../theme'
import styles from './styles'

export type ProfileScreenParams = {}
export type NavigationType = NavigationStackProp<{}, ProfileScreenParams>


export type ProfileScreenProps = {
  title: string
  navigation: NavigationType

  // Data
  user: UserDTO['data']

  // Function
  logout: any
}

type ProfileScreenState = {}

class ProfileScreen extends PureComponent<
  ProfileScreenProps & WithTranslation,
  ProfileScreenState
> {

  static defaultProps = {
    title: 'ProfileScreen',
  }


  static navigationOptions: NavigationStackOptions = {
    title: 'Profile',
  }

  handleLogout = () => {
    this.props.logout()
  }

  render() {
    const { user } = this.props


    return (
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainerStyle}>
          <View style={styles.wrapUserData}>
            <View style={styles.wrapUserLeft}>
              <View style={styles.wrapImage}>
                <Image
                  source={{
                    uri:
                      user.profileUrl ||
                      'https://bpnsgdvsmcsa.blob.core.windows.net/general/DEFAULT_USER_ICON_40.png',
                  }}
                  style={styles.imageUser}
                />
              </View>
              <View style={styles.wrapProfileText}>
                <Text style={styles.profileScreenText}>
                  {user.firstName} {user.lastName}
                </Text>
                <Text style={styles.profileDescText}>
                  ({user.email})
                </Text>
              </View>
            </View>
            <View style={styles.wrapEditButton}>
              <Text style={styles.EditText}>{"Edit"}</Text>
              <EditIcon fill={Theme.colors.iconText} />
            </View>
          </View>




          <View style={styles.wrapList}>
            <TouchableOpacity
              onPress={() => {
                this.handleLogout()
              }}>
              <View style={styles.listContainer}>
                <View style={styles.wrapListLeft}>
                  <View style={styles.listIcon}>
                    <LogoutIcon />
                  </View>
                  <Text style={styles.listText}>
                    {"Logout"}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>


          <Text style={styles.versionText}>
            {"Demo"} (0.0.1)
          </Text>


        </ScrollView>
      </SafeAreaView>
    )
  }
}


const mapStateToProps = (reduxState: any) => ({
  // Selected redux state hare
  user: reduxState.UserState.user.data
})

/**
 * Map action creators
 */
const mapDispatchToProps = {
  // Map action creators hare
  ...AuthActions
}

const ProfileScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileScreen)
const ProfileScreenWithTranslate = withTranslation()(ProfileScreenWithRedux)

export default hoistNonReactStatics(ProfileScreenWithTranslate, ProfileScreen)
