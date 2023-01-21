import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@my-design-system/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    css: { color: '$gray100' },
    children: 'Custom Heading',
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h2',
    children: 'H2 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default the `Heading` component renders an `h2` tag. You can change this by passing a different tag to the `as` prop.',
      },
    },
  },
}
