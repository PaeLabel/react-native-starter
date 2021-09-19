import React from 'react'
import styles from './styles'
import {Colors} from '../../../theme'
import {View, Text, TouchableOpacity} from 'react-native'

export type AlertConfirmProps = {
  title: string
  description: string
  button: [{text: string; textColor: string; onPress: () => void}]
}

const AlertConfirm = ({title, description, button}: AlertConfirmProps) => (
  <View style={styles.viewCard}>
    <View style={styles.viewPadding}>
      <Text style={styles.titleStyle}>{title}</Text>
      <Text style={styles.descriptionStyle}>{description}</Text>
      <View style={styles.viewButton}>
        {button.map(data => (
          <TouchableOpacity key={data.text} onPress={data.onPress}>
            <Text style={[styles.Button, {color: data.textColor}]}>
              {data.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  </View>
)

AlertConfirm.defaultProps = {}

export default AlertConfirm
