---
to: app/screens/<%= h.changeCase.pascalCase(name) %>Screen/styles.ts
---
import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../theme'

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  <%= h.changeCase.camelCase(name) %>Screen: {
    flex: 1,
  },
  <%= h.changeCase.camelCase(name) %>ScreenText: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    fontSize: Fonts.FONT_SIZE.X_SMALL,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.X_SMALL),
    color: Colors.TUNDORA,
    textAlign: 'center',
  },
})

export default styles
