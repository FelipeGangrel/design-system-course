import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@my-design-system/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Heading',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
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
