import { useState } from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { TextField } from './'

const meta = {
  title: 'Components/TextField',
  component: TextField,
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
    type: {
      options: ['text', 'password', 'search'],
      control: { type: 'radio' },
    },
    disabled: { control: { type: 'boolean' } },
    errorMessage: { control: { type: 'text' } },
    placeholder: { control: { type: 'text' } },
  },
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    ...meta,
    type: 'text',
    label: 'Default',
    placeholder: 'Default',
  },
}

export const Disabled: Story = {
  args: {
    ...meta,
    disabled: true,
    label: 'Disable',
    placeholder: 'Disable',
  },
}

export const DefaultWithError: Story = {
  args: {
    ...meta,
    errorMessage: 'Error',
    label: 'Error',
    placeholder: 'Error',
  },
}

export const Password: Story = {
  args: {
    ...meta,
    type: 'password',
    label: 'Password',
    placeholder: 'Password',
  },
}

export const Search: Story = {
  render: props => {
    const [value, setValue] = useState('')

    return <TextField {...props} value={value} onSetValue={setValue} disabled={false} />
  },
  args: {
    ...meta,
    type: 'search',
    label: 'Search',
    placeholder: 'Search',
  },
}
