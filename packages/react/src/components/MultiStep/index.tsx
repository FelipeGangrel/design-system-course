import { ComponentProps } from 'react'
import { Label, MultiStepContainer, Step, Steps } from './styles'

export type MultiStepProps = ComponentProps<typeof MultiStepContainer> & {
  steps: number
  currentStep?: number
}

export function MultiStep({ steps, currentStep = 1 }: MultiStepProps) {
  return (
    <MultiStepContainer>
      <Label>
        Passo {currentStep} de {steps}
      </Label>

      <Steps css={{ '--steps': steps }}>
        {Array.from({ length: steps }, (_, i) => i + 1).map((step) => {
          return <Step key={step} active={currentStep >= step} />
        })}
      </Steps>
    </MultiStepContainer>
  )
}
