import React from 'react'
import {
  ImageSourcePropType,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {Colors} from '../../../theme'
import IconImage from '../IconImage/IconImage'
import styles from './styles'

export type GradientButtonProps = {
  text: string
  disabled: boolean
  disabledWithoutStyle?: boolean
  width?: number
  height?: number
  onPress: () => void
  icon?: ImageSourcePropType
  textStyle?: TextStyle
  tintColor?: string
}

const GradientButton = ({
  text,
  disabled,
  disabledWithoutStyle,
  onPress,
  icon,
  width,
  height,
  textStyle,
  tintColor,
}: GradientButtonProps) => {
  return (
    <TouchableOpacity
      onPress={() => requestAnimationFrame(onPress)}
      disabled={disabledWithoutStyle || disabled}>
      <LinearGradient
        start={{x: 0, y: 0.75}}
        end={{x: 1, y: 0.25}}
        locations={[0.0, 1.0]}
        colors={
          disabled
            ? [Colors.VERYLIGHTPINK, Colors.VERYLIGHTPINK]
            : [Colors.AZURE, Colors.AQUAMARINE]
        }
        style={[styles.button, width ? {width} : {}, height ? {height} : {}]}>
        <View
          style={[styles.buttonContent, disabled ? styles.buttonDisabled : {}]}>
          {icon && (
            <React.Fragment>
              <IconImage
                size={24}
                imageSize={24}
                color={Colors.TRANSPARENT}
                tintColor={tintColor}
                source={icon}
              />
              <View style={styles.iconSpacer} />
            </React.Fragment>
          )}
          <Text
            style={[
              styles.text,
              disabled ? styles.textDisabled : {},
              textStyle,
            ]}>
            {text}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}

GradientButton.defaultProps = {
  disabled: false,
  disabledWithoutStyle: false,
  tintColor: Colors.WHITE,
  onPress() {},
}

export default GradientButton
