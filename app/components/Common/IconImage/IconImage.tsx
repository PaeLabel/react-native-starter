import React from 'react'
import {Image, ImageSourcePropType, View} from 'react-native'
import {Colors} from '../../../theme'
import styles from './styles'

export type IconImageProps = {
  source: ImageSourcePropType
  size: number
  imageSize: number
  color: string
  tintColor?: string | null
  borderColor?: string | null
  borderRadius?: number | null
}

const IconImage = ({
  source,
  size,
  color,
  imageSize,
  tintColor,
  borderColor,
  borderRadius,
}: IconImageProps) => (
  <View
    style={[
      styles.iconImage,
      {
        width: size,
        height: size,
        borderRadius: borderRadius || size / 2,
        backgroundColor: color,
      },
      borderColor ? {borderColor, borderWidth: 1} : {},
    ]}>
    <Image
      style={[
        {
          width: imageSize,
          height: imageSize,
          // borderRadius,
          // borderRadius: imageSize / 2,
        },
        tintColor ? {tintColor} : {},
      ]}
      source={source}
    />
  </View>
)

IconImage.defaultProps = {
  size: 50,
  imageSize: 50,
  color: Colors.AQUAMARINE,
}

export default IconImage
