import React from 'react'
import { Icon } from 'react-native-paper'
import theme from '../../themes/theme'

const MusicIcon = () => {
  return (
     <Icon
    source="camera"
    color={theme.colors.primary}
    size={20}
  />
  )
}

export default MusicIcon