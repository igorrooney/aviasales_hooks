import { makeStyles } from '@material-ui/core/styles'
import { common } from '@material-ui/core/colors';

export const useFilterStyles = makeStyles(theme => ({
  filterWrapper: {
    padding: '20px 20px 0 20px',
    backgroundColor: common.white,
    boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '5px',
    width: '192px',
    height: '232px',
  },
  textHeader: {
    fontSize: '12px',
    fontWeight: theme.typography.fontWeight.semibold,
    lineHeight: '12px',
    fontStyle: 'normal',
    letterSpacing: '0.5px',
    textTransform: 'upperCase',
    color: theme.palette.common.header,
    marginBottom: 20,
  },
  checkboxWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: '13px',
    lineHeight: '20px',
    alignItems: 'flex-start',
  }
}))
