import {useEffect, useState} from 'react'
import {Animated} from 'react-native'

const useSimpleToggleAnimate = (
  toggle: boolean = false,
  useNativeDriver: boolean = true,
) => {
  const [toggleAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    if (toggle) {
      Animated.timing(toggleAnim, {
        toValue: 1,
        duration: 150,
        useNativeDriver,
      }).start()
    } else {
      Animated.timing(toggleAnim, {
        toValue: 0,
        duration: 150,
        useNativeDriver,
      }).start()
    }
  }, [toggle, useNativeDriver])

  return toggleAnim
}

export default useSimpleToggleAnimate
