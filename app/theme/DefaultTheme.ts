import Colors from './Colors';
import * as Core from './core';
import Fonts from './Fonts';

const SPACER = 8
const ROUNDNESS = 4

const spacing = (spacer: number, factor: number = SPACER) => Core.spacing(spacer, factor)
const rounding = (roundness: number, factor: number = ROUNDNESS) => Core.rounding(roundness, factor)

const colorPalette = {
  primary: '#333333',
  secondary: '#333333',
  background: '#ffffff',
  text: '#333333',
  text2: '#505e69',
  border: '#333333',
  surface: '#ffffff',
  borderSurface: '#dee1ea',
  success: '#333333',
  info: '#333333',
  warning: '#333333',
  error1: '#333333',
  error2: '#333333',
  link: '#333333',
  iconText: '#333333',
  disabledButton: '#333333',
  disabledField: '#333333',
  gradient: ['#ff4946', '#19c155']
}

const textStyle = {
  header1: {
    fontSize: 15,
  },
  header2: {
    fontSize: 13,
  },
  caption: {
    fontSize: 11,
  },
  title: {
    fontSize: 14,
  },
  description: {
    fontSize: 14,
  },
  subDescription: {
    fontSize: 13,
  },
  text: {
    fontSize: 14,
  }
}

const DefaultTheme = {
  name: 'defaultTheme',
  colors: colorPalette,
  text: {
    ...textStyle
  },
  // For components
  screen: {
    paddingVertical: spacing(2),
    paddingHorizontal: spacing(1),
    backgroundColor: colorPalette.background,
  },
  buttons: {
    normal: {
      height: 45,
      borderWidth: 1,
      backgroundColor: colorPalette.primary,
      borderColor: colorPalette.primary,
      borderRadius: spacing(1),
      fontSize: textStyle.header1.fontSize,
      backgroundDisabledColor: colorPalette.disabledButton,
      textColor: Colors.WHITE,
      textDisabledColor: Colors.WHITE,
      text: { ...textStyle.header1 }
    },
    gradient: {
      height: 45,
      backgroundGradient: [...colorPalette.gradient],
      borderRadius: spacing(1),
      fontSize: textStyle.header1.fontSize,
      backgroundDisabledColor: colorPalette.disabledButton,
      textColor: Colors.WHITE,
      textDisabledColor: Colors.WHITE,
      text: { ...textStyle.header1, }
    },
  },
  spacing,
  rounding,
  variants: {
    tabBar: {
      activeTintColor: colorPalette.secondary,
      inactiveTintColor: Colors.BLUEYGREY,
      borderTopColor: colorPalette.background,
      backgroundColor: Colors.WHITE,
      labelStyle: {
        fontFamily: Fonts.FONT_FAMILY.ROBOTO_MEDIUM,
        fontSize: Fonts.FONT_SIZE.XX_SMALL,
        lineHeight: Core.getLineHeight(Fonts.FONT_SIZE.XX_SMALL),
        top: -5
      },
    },
    header: {
      headerTitleStyle: {
        ...textStyle.header1,
        textAlign: 'center'
      },
      headerStyle: {
        backgroundColor: Colors.WHITE,
        elevation: 0
      }
    }
  },
}
// baseLine: 14

export default DefaultTheme
