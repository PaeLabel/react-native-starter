import Colors from './Colors';
import * as Core from './core';
import Fonts from './Fonts';

const SPACER = 8
const ROUNDNESS = 4

const spacing = (spacer: number, factor: number = SPACER) => Core.spacing(spacer, factor)
const rounding = (roundness: number, factor: number = ROUNDNESS) => Core.rounding(roundness, factor)

const colorPalette = {
  primary: '#472f92',
  secondary: '#00b490',
  background: '#f9fafc',
  backdrop: Colors.RGBA('#0c0d0d', 0.5),
  shadow: Colors.RGBA('#455B63', 0.8),
  text: '#172843',
  text2: '#505e69',
  border: '#e2e5ed',
  surface: '#ffffff',
  borderSurface: '#dee1ea',
  success: '#19c155',
  info: '#2db7f5',
  warning: '#ff9f2e',
  error1: '#ff4946',
  error2: '#e8495b',
  link: '#0059e8',
  iconText: '#505e69',
  disabledButton: '#a8b1c1',
  disabledField: '#f2f2f5',
  gradient: ['#00b490', '#472f92']
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
