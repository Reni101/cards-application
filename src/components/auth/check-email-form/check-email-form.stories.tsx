import { Meta, StoryObj } from '@storybook/react'

import { CheckEmailForm } from './'

const meta = {
  title: 'Auth/CheckEmail',
  component: CheckEmailForm,
  tags: ['autodocs'],
  argTypes: {
    email: { control: { type: 'text' } },
  },
} satisfies Meta<typeof CheckEmailForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'test@gmail.com',
  },
}
