import type { Meta, StoryObj } from '@storybook/react'

import { Tabs } from './'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
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
    tabs: [
      { value: '123', tabName: 'switcher' },
      { value: '245', tabName: 'switcher 2' },
    ],
  },
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    tabs: [
      { value: '123', tabName: 'switcher' },
      { value: '245', tabName: 'switcher 2' },
    ],
  },
}

export const Disabled: Story = {
  args: {
    tabs: [
      { value: '123', tabName: 'switcher' },
      { value: '245', tabName: 'switcher 2', disabled: true },
    ],
  },
}
