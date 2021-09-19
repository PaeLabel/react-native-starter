import React, {memo, ReactNode} from 'react'
import {View, ViewStyle} from 'react-native'

export type BoxProps = {
  children?: ReactNode
} & ViewStyle

const Box = ({children, ...viewStyles}: BoxProps) => {
  return <View style={{...viewStyles}}>{children}</View>
}

Box.defaultProps = {}

export default memo(Box)
