import type { Meta, StoryObj } from '@storybook/react'

import { Profile } from './'

const meta = {
  title: 'Auth/Profile',
  component: Profile,
  tags: ['autodocs'],
  argTypes: {
    control: { type: 'radio' },
  },
} satisfies Meta<typeof Profile>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
