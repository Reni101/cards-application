import { Meta, StoryObj } from '@storybook/react'

import { ForgotPasswordForm } from './'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPasswordForm,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
