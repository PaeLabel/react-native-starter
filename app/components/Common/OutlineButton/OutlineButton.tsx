import React from 'react'
import {Colors} from '../../../theme'
import Button, {ButtonProps} from '../Button/Button'

export interface OutlineButtonProps extends ButtonProps {
  color?: string
}

const OutlineButton = (props: OutlineButtonProps) => {
  return (
    <Button
      backgroundColor={props.disabled ? Colors.VERYLIGHTPINK : Colors.WHITE}
      borderColor={props.disabled ? Colors.BLUEYGREY : props.color}
      textColor={props.disabled ? Colors.BLUEYGREY : props.color}
      {...props}
    />
  )
}

OutlineButton.defaultProps = {
  color: Colors.AZURE,
}

export default OutlineButton
