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
export type StackBackHomeButtonProps = {
  navigationProp: NavigationStackProp
}

const StackBackHome = ({ navigationProp }: StackBackHomeButtonProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigationProp.navigate('Home')}
    >
      <View style={styles.stackBackButton}>

        <BackButton fill={Theme.colors.text} />

      </View>
    </TouchableWithoutFeedback >
  )
}

/**
 * Default props
 */
StackBackHome.defaultProps = {
  title: 'StackBackButtonComponent',
}

export default memo(withTranslation()(StackBackHome))
