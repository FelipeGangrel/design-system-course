import type { ComponentProps } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$green300',
  color: '$white',
  borderRadius: '$sm',
  border: 0,
  fontWeight: '$bold',

  variants: {
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
      big: {
        fontSize: '$lg',
        padding: '$3 $6',
      },
    },
  },

  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>