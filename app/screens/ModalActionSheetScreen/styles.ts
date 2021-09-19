import {Dimensions, StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../theme'

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen')

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  modalActionSheetScreen: {
    flex: 1,
  },
  modalActionSheetScreenText: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    fontSize: Fonts.FONT_SIZE.X_SMALL,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.X_SMALL),
    color: Colors.TUNDORA,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalBackdrop: {
    flex: 1,
  },
  modalCard: {
    width: WIDTH,
    backgroundColor: Colors.WHITE,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 45,
  },
  textTitle: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_MEDIUM,
    fontSize: Fonts.FONT_SIZE.MEDIUM,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.MEDIUM),
    color: Colors.GREYISHBROWN,
    marginLeft: 12,
  },
})

export default styles
