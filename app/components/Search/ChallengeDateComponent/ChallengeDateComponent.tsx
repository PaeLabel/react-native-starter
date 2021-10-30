import moment from 'moment'
import React, { memo } from 'react'
import { withTranslation, WithTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import ClockIcon from '../../../assets/icons/Search/clock_icon.svg'
import styles from './styles'


/**
 * Define component props type
 */
export type challengeDateComponentProps = {
  dateTime: any,
}

const challengeDateComponent = ({ dateTime }: challengeDateComponentProps & WithTranslation) => {


  return (
    <View style={styles.wrapDateTime}>
      <ClockIcon />
      <Text style={styles.challengeDateTimeText}>{moment(dateTime).format('DD/MM/YYYY HH:mm')}</Text>
    </View>
  )
}

/**
 * Default props
 */
challengeDateComponent.defaultProps = {
  title: 'challengeDateComponentComponent',
}

export default memo(withTranslation()(challengeDateComponent))
