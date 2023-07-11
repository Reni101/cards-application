import { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
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
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarWithOutImgS: Story = {
  args: {
    fallback: '345SAMURAI',
  },
}
export const AvatarWithOutImgL: Story = {
  args: {
    fallback: '!!SAMURAI',
    size: 'large',
  },
}
export const AvatarImgL: Story = {
  args: {
    fallback: '!!SAMURAI',
    size: 'large',
    src: 'https://png.pngtree.com/png-vector/20220817/ourmid/pngtree-cartoon-man-avatar-vector-ilustration-png-image_6111064.png',
  },
}
