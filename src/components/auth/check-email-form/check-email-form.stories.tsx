import { Meta, StoryObj } from '@storybook/react'
import { withRouter } from 'storybook-addon-react-router-v6'

import { CheckEmailForm } from './'

const meta = {
  title: 'Auth/CheckEmailForm',
  component: CheckEmailForm,
  tags: ['autodocs'],
  argTypes: {},
  decorators: [withRouter],
} satisfies Meta<typeof CheckEmailForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    email: 'bla-bla@gmail.com',
  },
}
