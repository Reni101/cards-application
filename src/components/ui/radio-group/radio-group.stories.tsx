import { useState } from 'react'

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
    labelText: { controls: { type: 'text' } },
  },
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: args => {
    const [value, setValue] = useState('')

    return (
      <>
        <RadioGroup {...args} value={value!} onValueChange={setValue} />
      </>
    )
  },
  args: {
    options: [
      { label: 'default', value: 'default', id: '1' },
      { label: 'active', value: 'active', id: '2' },
      { label: 'hover', value: 'hover', id: '3' },
    ],
  },
}

export const Disabled: Story = {
  render: args => {
    const [value, setValue] = useState('')

    return (
      <>
        <RadioGroup {...args} value={value!} onValueChange={setValue} />
      </>
    )
  },
  args: {
    disabled: true,
    options: [
      { label: 'default', value: 'default', id: '1' },
      { label: 'active', value: 'active', id: '2' },
      { label: 'hover', value: 'hover', id: '3' },
    ],
  },
}
