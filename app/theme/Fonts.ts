export const FONT_FAMILY = {
  ROBOTO_BOLD: 'Roboto-Bold',
  ROBOTO_MEDIUM: 'Roboto-Medium',
  ROBOTO_REGULAR: 'Roboto-Regular',
}

const FONT_SIZE = {
  BASE_SIZE: 16,
  XXX_SMALL: 10,
  XX_SMALL: 12,
  X_SMALL: 14,
  SMALL: 15,
  MEDIUM: 16,
  LARGE: 18,
  X_LARGE: 20,
  XX_LARGE: 22,
  XXX_LARGE: 24,
}

const getLineHeight = (fontSize: number, lineheight: number = 4) => {
  return fontSize + lineheight
}

const FONTS = {
  FONT_FAMILY,
  FONT_SIZE,
  getLineHeight,
}

export default FONTS
