import React, { memo } from 'react'
import { withTranslation } from 'react-i18next'
import { TouchableWithoutFeedback, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import BackButton from '../../../assets/icons/Home/backicon.svg'
import { Theme } from '../../../theme'
import styles from './styles'

/**
 * Define component props type
 */
export type StackBackButtonProps = {
  navigationProp: NavigationStackProp,
  mapMode: boolean,
}

const StackBackButton = ({ navigationProp, mapMode }: StackBackButtonProps) => {

  return (
    <TouchableWithoutFeedback
      onPress={() => mapMode ? navigationProp.pop() : navigationProp.pop()}
    >
      <View style={mapMode ? styles.stackBackButtonMap : styles.stackBackButton}>

        <BackButton fill={Theme.colors.text} />

      </View>
    </TouchableWithoutFeedback >
  )
}

/**
 * Default props
 */
StackBackButton.defaultProps = {
  title: 'StackBackButtonComponent',
  mapMode: false,
}

export default memo(withTranslation()(StackBackButton))
