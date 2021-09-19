import React from 'react'
import {
  ImageSourcePropType,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native'
import { Colors, Fonts } from '../../../theme'
import FONTS from '../../../theme/Fonts'
import IconImage, { IconImageProps } from '../IconImage/IconImage'
import styles from './styles'

export type ButtonProps = {
  text: string
  disabled?: boolean
  isTextCenterWithoutIcon?: boolean
  width?: number
  height?: number
  fontSize?: number
  borderWidth?: number
  borderRadius?: number
  paddingHorizontal?: number
  textColor?: string
  backgroundColor?: string
  borderColor?: string
  onPress: () => void
  icon?: ImageSourcePropType
  iconProps?: IconImageProps
  textStyle?: TextStyle
  borderStyle?: ViewStyle['borderStyle']
}
const Button = ({
  text,
  disabled,
  onPress,
  icon,
  iconProps,
  width,
  height,
  fontSize,
  textColor,
  textStyle,
  backgroundColor,
  borderColor,
  borderWidth,
  borderRadius,
  paddingHorizontal,
  isTextCenterWithoutIcon,
  borderStyle,
}: ButtonProps) => {
  return (
    <TouchableOpacity onPress={() => requestAnimationFrame(onPress)} disabled={disabled}>
      <View
        style={[
          styles.button,
          width ? {width} : {},
          height ? {height} : {},
          {backgroundColor},
          {borderColor},
          {borderWidth},
          {borderRadius},
          {paddingHorizontal},
          {borderStyle}
        ]}>
        <View
          style={[styles.buttonContent, disabled ? styles.buttonDisabled : {}]}>
          <View
            style={{
              flexDirection: 'row',
              transform: [
                {
                  translateX: isTextCenterWithoutIcon ? -14 : 0,
                },
              ],
            }}>
            {icon && (
              <React.Fragment>
                <IconImage
                  size={24}
                  imageSize={24}
                  color={Colors.TRANSPARENT}
                  {...iconProps}
                  source={iconProps?.source || icon}
                />
                <View style={styles.iconSpacer} />
              </React.Fragment>
            )}
            <Text
              style={[
                styles.text,
                disabled ? styles.textDisabled : {},
                {fontSize},
                {lineHeight: FONTS.getLineHeight(fontSize || Fonts.FONT_SIZE.BASE_SIZE)},
                textStyle,
                {color: textColor},
                disabled ? styles.buttonDisabled : {},
              ]}>
              {text}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  disabled: false,
  fontSize: Fonts.FONT_SIZE.BASE_SIZE,
  textColor: Colors.WHITE,
  backgroundColor: Colors.AZURE,
  borderColor: Colors.AZURE,
  borderWidth: 1,
  paddingHorizontal: 0,
  borderRadius: 8,
  iconProps: {},
  borderStyle: 'solid',
  onPress() {},
}

export default Button
