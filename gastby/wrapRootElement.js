import React from 'react'
import {ThemeProvider} from 'styled-components'

import light from '../src/styles/themes/light'

export function wrapRootElement({ element }) {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <ThemeProvider theme={light}>{element}</ThemeProvider>
}