import React, {memo} from 'react'
import {ActivityIndicator, View} from 'react-native'
import {Colors} from '../../../theme'
import styles from './styles'

/**
 * Define component props type
 */
export type LoadingProps = {}

const Loading = ({}: LoadingProps) => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={Colors.AQUAMARINE} />
    </View>
  )
}

/**
 * Default props
 */
Loading.defaultProps = {}

export default memo(Loading)
