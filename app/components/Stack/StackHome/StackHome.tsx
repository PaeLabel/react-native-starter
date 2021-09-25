import React, { memo } from 'react'
import { withTranslation } from 'react-i18next'
import { TouchableWithoutFeedback, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import HomeButton from '../../../assets/icons/Home/home.svg'
import { Theme } from '../../../theme'
import styles from './styles'

/**
 * Define component props type
 */
export type StackHomeButtonProps = {
  navigationProp: NavigationStackProp,
  mapMode: boolean,
}

const StackHome = ({ navigationProp, mapMode }: StackHomeButtonProps) => {

  return (
    <TouchableWithoutFeedback
      onPress={() => mapMode ? navigationProp.navigate('Home') : navigationProp.popToTop()}
    >
      <View style={mapMode ? styles.StackHomeMap : styles.StackHome}>

        <HomeButton fill={Theme.colors.text} width='18' style={{ bottom: 1 }} />

      </View>
    </TouchableWithoutFeedback>
  )
}

/**
 * Default props
 */
StackHome.defaultProps = {
  title: 'StackBackButtonComponent',
  mapMode: false,
}

export default memo(withTranslation()(StackHome))
