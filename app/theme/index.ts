import Colors from './Colors'
import DefaultTheme from './DefaultTheme'
import Fonts from './Fonts'

let selectedTheme = 'default'

const selectTheme = (themeName: string) => {
  selectedTheme = themeName
}

const getTheme = () => {
  return DefaultTheme
}

const Theme = DefaultTheme

export { Colors, Fonts, Theme, selectTheme, getTheme }

