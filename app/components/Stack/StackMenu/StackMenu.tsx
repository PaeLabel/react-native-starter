import React, { memo } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { TouchableWithoutFeedback, View } from 'react-native'
import { NavigationStackProp } from 'react-navigation-stack'
import styles from './styles'


/**
 * Define component props type
 */
export type StackMenuProps = {
  navigationProp: NavigationStackProp
}

const StackMenu = ({ navigationProp }: StackMenuProps & WithTranslation) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => console.log("Click Menu")}
    >
      <View style={styles.stackMenu}>
        {/* <HomeStackMenu /> */}
      </View>
    </TouchableWithoutFeedback>
  )
}

/**
 * Default props
 */
StackMenu.defaultProps = {}

export default memo(withTranslation()(StackMenu))
