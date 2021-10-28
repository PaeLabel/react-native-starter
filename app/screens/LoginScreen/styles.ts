
import { Dimensions, Platform, StatusBar, StyleSheet } from 'react-native'
import { Theme } from '../../theme'

const { height: HEIGHT } = Dimensions.get('window')

const StatusBarHeight = Platform.select({
  ios: 22,
  android: StatusBar.currentHeight
}) || 0

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    height: HEIGHT,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Theme.colors.surface,
    borderRadius: 5,
    width: 300,
    height: 45,
    marginBottom: Theme.spacing(2),
    alignItems: 'center',
    borderColor: Theme.colors.borderSurface,
    borderWidth: 1,
    zIndex: 999
  },
  collageLayoutStyle: {
    flex: 0,
    height: HEIGHT - StatusBarHeight,
  },
  btnContainer: {
    ...Theme.text.title,
    zIndex: 99,
    width: 'auto',
    marginTop: Theme.spacing(1),
  },
  inputs: {
    ...Theme.text.title,
    marginLeft: 16,
    paddingRight: 16,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60 + StatusBarHeight,
    minHeight: 700,
  },
  content: {
    paddingTop: Theme.spacing(3),
    alignItems: 'center'
  },
  SubText: {
    ...Theme.text.header1,
    marginTop: 50,
    fontSize: 20,
  },
  inputText: {
    ...Theme.text.title,
    alignSelf: 'flex-start',
    marginBottom: 7
  },
  eyeButton: {
    alignSelf: 'center',
    right: 15
  },
})

export default styles
