
export const spacing = (spacer: number, factor = 8) => factor * spacer
export const rounding = (roundness: number, factor = 4) => factor * roundness

export const getLineHeight = (fontSize: number, lineheight: number = 4) => {
  return fontSize + lineheight
}
