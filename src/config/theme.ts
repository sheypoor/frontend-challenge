import { createTheme } from '@mui/material/styles'
import colors from './colors'
import { green, purple } from '@mui/material/colors'

export const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    error: {
      main: colors.error,
    },
  },
})
