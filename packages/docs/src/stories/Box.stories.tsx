import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@design-system-course/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Text here</Text>,
    argTypes: {
      children: {
        control: {
          type: null,
        },
      },
    },
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
