import { Heading, styled, Text } from '@design-system-course/react'

export const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$20',
  maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
  height: '100vh',
  minHeight: '600px',
  marginLeft: 'auto',
})

export const Hero = styled('div', {
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto',
  padding: '0 $10',

  [`${Heading}`]: {
    color: '$gray100',
  },

  [`${Text}`]: {
    marginTop: '$2',
    marginBottom: '$2',
    color: '$green300',
  },
})
