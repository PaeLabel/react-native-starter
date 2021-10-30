import { StyleSheet } from 'react-native'
import { Colors, Fonts } from '../../theme'

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  challengeScreen: {
    flex: 1,
    padding: 24,
  },
  challengeScreenText: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    fontSize: Fonts.FONT_SIZE.X_SMALL,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.X_SMALL),
    color: Colors.TUNDORA,
    textAlign: 'center',
  },
  txtTitle: {
    color: Colors.BLACK,
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold'
  },

  txtChallengeTitle: {
    color: Colors.BLACK,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'

  },
  txtChallenge: {
    margin: 5,
    color: Colors.BLACK,
    fontSize: 16,
    textAlign: 'left',
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
