import { StyleSheet } from 'react-native'
import { Colors } from '../../../theme'

const styles = StyleSheet.create({
  StackHome: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 30,
    // width: 20,
  },
  StackHomeMap: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 20,
    width: '100%',
    backgroundColor: Colors.WHITE,
    height: 46,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  }
})

export default styles
