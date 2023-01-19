import React from 'react'

import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  height: '$6',
})

export const App: React.FC = () => {
  return <Button>Hello</Button>
}
