import React, {memo} from 'react'
import {Text, View} from 'react-native'
import {IconSource} from '../../../assets'
import {Colors} from '../../../theme'
import Button, {ButtonProps} from '../Button/Button'
import GradientButton from '../GradientButton/GradientButton'
import IconImage from '../IconImage/IconImage'
import styles from './styles'

/**
 * Define component props type
 */
export type ModalSuccessContentProps = {
  title: string
  description: string
  button: [
    {
      text: string
      onPress: () => void
      color?: string
      textColor?: string
      isGradient?: boolean
    } & ButtonProps,
  ]
}

const ModalSuccessContent = ({
  title,
  description,
  button,
}: ModalSuccessContentProps) => {
  const buttons = button.map((btn) => ({
    ...btn,
    isGradient: btn.isGradient || true,
  }))
  return (
    <View style={styles.modalContent}>
      <View style={styles.modalIconWrapper}>
        <IconImage
          color={Colors.MOUNTAIN}
          tintColor={Colors.WHITE}
          source={IconSource.CHECKER}
          size={70}
        />
      </View>
      <Text style={styles.textModalTitle}>{title}</Text>
      <Text style={styles.textModalDescription}>{description}</Text>

      {buttons.map(({isGradient, ...btn}) =>
        isGradient ? (
          <GradientButton key={btn.text} {...btn} />
        ) : (
          <Button key={btn.text} {...btn} />
        ),
      )}
    </View>
  )
}

/**
 * Default props
 */
ModalSuccessContent.defaultProps = {
  button: [],
}

export default memo(ModalSuccessContent)
