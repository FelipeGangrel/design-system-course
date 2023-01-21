import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@my-design-system/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    css: { color: '$gray100' },
    children: (
      <>
        <Text as="p" size="md">
          Text here
        </Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
