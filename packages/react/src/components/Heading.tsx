import type { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Heading = styled('h2', {
  fontFamily: '$default',
  fontSize: '$md',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    size: {
      sm: { fontSize: '$xl' },
      md: { fontSize: '$2xl' },
      lg: { fontSize: '$4xl' },
      '2xl': { fontSize: '$5xl' },
      '3xl': { fontSize: '$6xl' },
      '4xl': { fontSize: '$7xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType
}
