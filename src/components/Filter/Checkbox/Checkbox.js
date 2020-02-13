import React from 'react'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'


import selectedCheckbox from 'images/selected_checkbox.svg'
import unselectedCheckbox from 'images/unselected_checkbox.svg'

const Wrapper = styled.div`
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`

const Label = styled.label`
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  color: #4A4A4A;
`

const Checkbox = props => {
  return (
    <Wrapper>
    <input type="checkbox" id={props.name} value={props.name} {...props} />
    <Label htmlFor={props.name} >{props.name}</Label>
    </Wrapper>
  )
}

export default Checkbox