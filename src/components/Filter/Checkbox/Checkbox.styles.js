import { makeStyles } from "@material-ui/core";
export const useCheckboxStyles = makeStyles(theme => ({
  root: {
    paddingLeft: 11,
    paddingBottom: 20,
    paddingTop: 0,
    paddingRight: 10,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    display: 'flex',
    borderRadius: 2,
    width: 18,
    height: 18,
    border: '1px solid #9ABBCE',
  },
  checkedIcon: {
    width: 12,
    height: 8,
    alignSelf: 'center',
    margin: '0 auto'
    },
  }))
