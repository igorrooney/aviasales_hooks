import { palette } from '../palette'

export const dialog = {
  MuiBackdrop: {
    root: {
      backgroundColor: palette.common['dark-alpha-40'],
    }
  },
  MuiDialog: {
    paper: {
      padding: '52px 36px',
      fontSize: '16px',
      textAlign: 'center',
      borderRadius: 0
    }
  },
  MuiDialogTitle: {
    root: {
        padding: 0,
        marginBottom: 40,
        fontWeight: 400,
        fontSize: '24px',
        color: palette.common['primary-grey'],
        textAlign: 'center'
    }
  },
  MuiDialogContent: {
    root: {
      padding: 0,
      marginBottom: 40,
      textAlign: 'center'
    }
  },
  MuiDialogActions: {
    root: {
      padding: 0,
      justifyContent: 'center',
      width: '100%'
    }
  },
}
