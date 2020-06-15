import { makeStyles } from '@material-ui/core/styles'

export const useAppStyles = makeStyles((theme) => ({
  containerWrapper: {
    backgroundColor: theme.palette.bg.main,
    padding: '50px 103px 120px 103px', 
  },
  logo: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '50px',
  },
  svgIcon: {
    // alignSelf: 'flex-start'
  },
  mainContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  }
}))
