import hoistNonReactStatics from 'hoist-non-react-statics'
import React, {PureComponent} from 'react'
import {withTranslation, WithTranslation} from 'react-i18next'
import {
  ImageSourcePropType,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'
import Touchable from 'react-native-platform-touchable'
import SafeAreaView from 'react-native-safe-area-view'
import {
  NavigationStackOptions,
  NavigationStackProp,
} from 'react-navigation-stack'
import {connect} from 'react-redux'
import IconImage from '../../components/Common/IconImage/IconImage'
import {Colors} from '../../theme'
import styles from './styles'

type ItemProps = {
  icon: ImageSourcePropType
  title: string
  onPress: () => void
}

/**
 * Define navigation params
 */
export type ModalActionSheetScreenParams = {
  items: ItemProps[]
}
export type NavigationType = NavigationStackProp<ModalActionSheetScreenParams>

/**
 * Define component props type
 */
export type ModalActionSheetScreenProps = {
  title: string
  navigation: NavigationType
}

/**
 * Define component state type
 */
type ModalActionSheetScreenState = {}

class ModalActionSheetScreen extends PureComponent<
  ModalActionSheetScreenProps & WithTranslation,
  ModalActionSheetScreenState
> {
  /**
   * Default props
   */
  static defaultProps = {
    title: 'ModalActionSheetScreen',
  }

  /**
   * Navigation configuration
   */
  static navigationOptions: NavigationStackOptions = {
    title: 'ModalActionSheet', // Set navbar text title
  }

  render() {
    const items = this.props.navigation.state?.params?.items || []
    const onClose = () => {
      this.props.navigation.goBack()
    }

    return (
      <SafeAreaView style={styles.safeAreaView}>
        <View style={styles.modalContainer}>
          <TouchableWithoutFeedback onPress={onClose}>
            <View style={styles.modalBackdrop} />
          </TouchableWithoutFeedback>
          <View style={styles.modalCard}>
            {items.map((item: ItemProps) => {
              const handlePress = () => {
                this.props.navigation.goBack()
                item.onPress()
              }
              return (
                <Touchable onPress={handlePress} key={item.title}>
                  <View style={styles.row}>
                    <IconImage
                      source={item.icon}
                      color={Colors.TRANSPARENT}
                      size={24}
                      imageSize={24}
                    />
                    <Text style={styles.textTitle}>{item.title}</Text>
                  </View>
                </Touchable>
              )
            })}
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

const ModalActionSheetScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalActionSheetScreen)
const ModalActionSheetScreenWithTranslate = withTranslation()(
  ModalActionSheetScreenWithRedux,
)

export default hoistNonReactStatics(
  ModalActionSheetScreenWithTranslate,
  ModalActionSheetScreen,
)
