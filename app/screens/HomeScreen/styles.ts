import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme'

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  homeScreen: {
    flex: 1,
    padding: 24,
  },
  homeScreenText: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    fontSize: Fonts.FONT_SIZE.X_LARGE,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.X_LARGE),
    color: Colors.TUNDORA,
    textAlign: 'center',
  },
  txtTitle: {
    color: Colors.WHITE,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  },
  txtChallenge: {
    color: Colors.WHITE,
    fontSize: 20,
    textAlign: 'center',

  },
  boxBtn: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    alignContent: 'center',
    alignSelf: 'center'
  }
})

export default styles
