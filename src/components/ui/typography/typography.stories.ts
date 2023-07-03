import { Meta, StoryObj } from '@storybook/react'

import { Typography } from './'

const meta = {
  title: 'Components/Typography',
  component: Typography,
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
  argTypes: {
    variant: {
      options: [
        'large',
        'h1',
        'h2',
        'h3',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'overline',
        'link1',
        'link2',
      ],
      control: { type: 'radio' },
    },
  },
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    variant: 'large',
    children: 'Large Typography',
  },
}
export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'H1 Typography',
  },
}
export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'H2 Typography',
  },
}
export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'H3 Typography',
  },
}
export const Subtitle1: Story = {
  args: {
    variant: 'subtitle1',
    children: 'Subtitle1 Typography',
  },
}
export const Subtitle2: Story = {
  args: {
    variant: 'subtitle2',
    children: 'Subtitle2 Typography',
  },
}
export const Body1: Story = {
  args: {
    variant: 'body1',
    children: 'Body1 Typography',
  },
}
export const Body2: Story = {
  args: {
    variant: 'body2',
    children: 'Body2 Typography',
  },
}
export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'Caption Typography',
  },
}
export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'Overline Typography',
  },
}
export const Link1: Story = {
  args: {
    variant: 'link1',
    children: 'Link1 Typography',
  },
}
export const Link2: Story = {
  args: {
    variant: 'link2',
    children: 'Link2 Typography',
  },
}
