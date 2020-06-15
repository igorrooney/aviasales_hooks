import { makeStyles } from '@material-ui/core/styles'
import { common } from '@material-ui/core/colors';
import { palette } from '../../theme/palette';
import { typography } from '../../theme/typography';

export const useTicketStyles = makeStyles(theme => ({
  wrapper: {
    paddingLeft: '20px',
    paddingTop: '20px',
    paddingRight: '20px',
    paddingBottom: '20px',
    backgroundColor: common.white,
    marginTop: '20px',
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  logo: {
    marginRight: '30px'
  },
  price: {
    fontSize: '24px',
    fontWeight: typography.fontWeight.semibold,
    lineHeight: '24px',
    color: palette.common.blue,
  },
  segmentHeader: {
    fontSize: '12px',
    fontWeight: typography.fontWeight.semibold,
    lineHeight: '18px',
    letterSpacing: '0.5px',
    color: palette.common.gray,
    textTransform: 'upperCase',
  },
  segmentBody: {
    fontSize: '14px',
    fontWeight: typography.fontWeight.semibold,
    lineHeight: '21px',
    color: palette.common.header,
  },
  way: {
    marginBottom: '10px',
  },
}))
