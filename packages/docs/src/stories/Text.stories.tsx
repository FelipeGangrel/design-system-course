import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@my-design-system/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    as: 'h1',
    css: { color: '$gray100' },
    children: 'Text',
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}
