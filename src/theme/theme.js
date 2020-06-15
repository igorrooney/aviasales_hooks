// https://material-ui.com/customization/default-theme/
import { createMuiTheme } from '@material-ui/core/styles'
// Parts
import { palette } from './palette'
import { typography } from './typography'
import { overrides } from './overrides'

const theme = {
  palette,
  typography,
  spacing: 1,
  gutter: 1,
  shadow: {
    main: '0px 3px 6px rgba(0, 0, 0, 0.1)',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 960,
      xl: 1280,
    }
  },
  container: {
    wide: '1740px',
    narrow: '1088px',
  },
  overrides,
}

export const muiTheme = createMuiTheme(theme)
