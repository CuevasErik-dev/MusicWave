import { View, Text } from 'react-native'
import React from 'react'
import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  myOwnProperty: true,
  colors: {
    ...DefaultTheme.colors,
    /* 
    text0: eaeaea  || secundario: 9aa4bf
    acent 64bdf6 || 6c63ff
    */
    primary: '#1ecbe1',
    secondary:'#828385',
    outline:'#ee1616',
    background:'#0b1220',
    text:"#eaeaea"
  },
};

export default theme