import { Meta, StoryObj } from '@storybook/react'

import { ChangePassword } from './'

const meta = {
  title: 'Auth/ChangePassword',
  component: ChangePassword,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ChangePassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
