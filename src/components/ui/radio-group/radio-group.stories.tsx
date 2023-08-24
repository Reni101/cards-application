import type { Meta, StoryObj } from '@storybook/react'

import { RadioGroup } from './'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#000',
        },
      ],
    },
  },
  argTypes: {
    disabled: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Radio: Story = {
  args: {
    options: [
      { label: 'default', value: 'default', id: '1' },
      { label: 'active', value: 'active', id: '2' },
      { label: 'hover', value: 'hover', id: '3' },
    ],
  },
}
