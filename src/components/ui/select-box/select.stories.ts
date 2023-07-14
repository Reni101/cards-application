import { Meta, StoryObj } from '@storybook/react'

import { Select } from './select'

const meta = {
  title: 'Components/Select',
  component: Select,
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
  argTypes: {},
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

export const SelectPagination: Story = {
  args: {
    options: [
      { value: '10', label: 10 },
      { value: '20', label: 20 },
      { value: '30', label: 30 },
      { value: '50', label: 50 },
      { value: '100', label: 100 },
    ],
    defaultValue: '30',
    showIcon: false,
  },
}
export const SelectTypeQuestion: Story = {
  args: {
    options: [
      { value: 'text', label: 'Text' },
      { value: 'picture', label: 'Picture' },
    ],
    defaultValue: 'text',
    showIcon: true,
  },
}
