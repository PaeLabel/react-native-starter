import {useCallback, useState} from 'react'
import {LayoutChangeEvent} from 'react-native'

type Layout = {
  width: number
  height: number
  x: number
  y: number
}

type onLayout = (event: LayoutChangeEvent) => void

const useLayout = (): [Layout, onLayout] => {
  const [isDetected, setDetected] = useState(false)
  const [layout, setLayout] = useState<Layout>({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
  })

  const onLayout = useCallback(
    (event: LayoutChangeEvent) => {
      if (!isDetected) {
        setLayout(event.nativeEvent.layout)
        setDetected(true)
      }
    },
    [setLayout, setDetected, isDetected],
  )
  return [layout, onLayout]
}

export default useLayout
