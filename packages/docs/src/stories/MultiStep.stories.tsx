import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@my-design-system/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  argTypes: {
    steps: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
      },
    },
    currentStep: {
      control: {
        type: 'range',
        min: 1,
        max: 10,
      },
    },
  },
  args: {
    steps: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {
  args: {},
}
