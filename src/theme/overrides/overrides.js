import { palette } from '../palette'
import { typography } from '../typography'
import { common } from '@material-ui/core/colors'
import cursorIcon from 'images/cursor.svg'

export const overrides = {
  MuiFormControlLabel: {
    root: {
      alignItems: 'flex-start',
    },
    label: {
      fontSize: '13px',
      lineHeight: '20px',
    }
  },
  MuiTab: {
    textColorPrimary: {
      fontSize: '12px',
      fontWeight: typography.fontWeight.semibold,
      lineHeight: '20px',
      letterSpacing: '0.5px',
      color: palette.common.header,
      '&$selected': {
        color: common.white,
        backgroundColor: palette.common.blue,
      }
    }
  },
}
