import { Meta, StoryObj } from '@storybook/react'

import { CheckEmail } from './'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmail,
  tags: ['autodocs'],
  argTypes: {
    email: { control: { type: 'text' } },
  },
} satisfies Meta<typeof CheckEmail>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'test@gmail.com',
  },
}
