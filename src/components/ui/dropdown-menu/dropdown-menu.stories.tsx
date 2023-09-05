import { Meta, StoryObj } from '@storybook/react'

import { DropdownMenu } from './dropdown-menu'

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
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
} satisfies Meta<typeof DropdownMenu>

export default meta
type Story = StoryObj<typeof meta>

export const Dropdown: Story = {
  args: {
    options: [
      <span key={1} style={{ backgroundColor: 'red', borderRadius: '2px', margin: 1 }}>
        222222222222123455
      </span>,
      '456',
    ],
    children: <div> trigger</div>,
  },
}
