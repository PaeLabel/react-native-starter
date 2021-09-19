import {Dimensions} from 'react-native'

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window')

export const aspectRatiosCalculate = (
  ratio: string = '',
  defaultImageRatio: {width: number; height: number} = {
    width: WIDTH,
    height: HEIGHT,
  },
) => {
  const [h, w] = ratio.split(':')

  const width = (defaultImageRatio.height * parseInt(h)) / parseInt(w)
  const height = (defaultImageRatio.width * w) / h

  return {
    width,
    height,
  }
}

export const autoScaleHeigh = (
  currentHeight: number,
  width: number = WIDTH,
  baseHeight: number = HEIGHT,
) => {
  const calHeight = (width * currentHeight) / baseHeight
  const newHeight = calHeight < currentHeight ? currentHeight : calHeight

  return newHeight
}
