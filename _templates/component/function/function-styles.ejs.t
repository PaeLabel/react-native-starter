---
to: app/components/<%= h.changeCase.pascalCase(into) %>/<%= h.changeCase.pascalCase(name) %>/styles.ts
---
import {StyleSheet} from 'react-native'
import {Colors, Fonts} from '../../../theme'

const styles = StyleSheet.create({
  <%= h.changeCase.camelCase(name) %>: {
    height: 50,
    padding: 18,
    backgroundColor: Colors.AZURE,
  },
  <%= h.changeCase.camelCase(name) %>Text: {
    fontFamily: Fonts.FONT_FAMILY.ROBOTO_BOLD,
    fontSize: Fonts.FONT_SIZE.X_SMALL,
    lineHeight: Fonts.getLineHeight(Fonts.FONT_SIZE.X_SMALL),
    color: Colors.TUNDORA,
    textAlign: 'center',
  },
})

export default styles
