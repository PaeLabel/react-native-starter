import { StyleSheet } from 'react-native'
import { Theme } from '../../../theme'

const styles = StyleSheet.create({
  wrapDateTime: {

    flexDirection: 'row',
    marginTop: 10,
  },
  challengeDateTimeText: {
    ...Theme.text.subDescription,
    textAlign: 'left',
    marginLeft: 5,
  },
})

export default styles
