import React from 'react';
import clsx from 'clsx';
import Checkbox from '@material-ui/core/Checkbox';
import SVG from 'react-inlinesvg'
// Styles
import { useCheckboxStyles } from './Checkbox.styles'
import selected_checkbox from 'images/selected_checkbox.svg'

export default function StyledCheckbox(props) {
  const classes = useCheckboxStyles()

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={
        <span className={classes.icon}>
          <SVG src={selected_checkbox} className={classes.checkedIcon} />
        </span>
      }
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  )
}
