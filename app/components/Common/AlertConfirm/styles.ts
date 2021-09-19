import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../../theme'

const styles = StyleSheet.create({
  viewCard: {
    backgroundColor: Colors.WHITE,
    width: 315,
    minHeight: 152,
    borderRadius: 10,
  },
  viewPadding: {
    padding: 16,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.GREYISHBROWN,
  },
  descriptionStyle: {
    fontSize: 16,
    paddingTop: 12,
    color: Colors.BLUEYGREY,
  },
  viewButton: {
    flexDirection: 'row',
    paddingTop: 24,
    justifyContent: 'flex-end',
  },
  Button: {
    padding: 11,
    fontWeight: 'bold',
    fontSize: 18,
  },
})

export default styles
