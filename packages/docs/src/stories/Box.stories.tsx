import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps } from '@my-design-system/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Box</span>
      </>
    ),
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
