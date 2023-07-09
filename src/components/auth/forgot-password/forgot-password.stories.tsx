import { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from './'

const meta = {
  title: 'Auth/ForgotPassword',
  component: ForgotPassword,
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
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
