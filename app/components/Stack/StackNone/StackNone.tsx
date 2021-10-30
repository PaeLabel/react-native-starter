import React, { memo } from 'react'
import { withTranslation } from 'react-i18next'
import { TouchableWithoutFeedback, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import styles from './styles'

/**
 * Define component props type
 */
export type StackNoneButtonProps = {
  navigationProp: NavigationStackProp
}

const StackNone = ({ navigationProp }: StackNoneButtonProps) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => navigationProp.navigate('Home')}
    >
      <View style={styles.stackBackButton}>

        {/* <BackButton fill={Theme.colors.text} /> */}

      </View>
    </TouchableWithoutFeedback >
  )
}

/**
 * Default props
 */
StackNone.defaultProps = {
  title: 'StackBackButtonComponent',
}

export default memo(withTranslation()(StackNone))
