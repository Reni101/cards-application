import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './'

const meta = {
  title: 'Auth/Login_form',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
    control: { type: 'radio' },
  },
} satisfies Meta<typeof LoginForm>

export default meta
type Story = StoryObj<typeof meta>

export const LoginFormStories: Story = {}
