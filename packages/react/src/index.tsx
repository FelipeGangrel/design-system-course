import React from 'react'

import { styled } from './styles'

const StyledButton = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  height: '$6',
})

export const Button: React.FC = () => {
  return <StyledButton>Hello</StyledButton>
}
