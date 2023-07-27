import type { Meta, StoryObj } from '@storybook/react'

import { Pagination } from './'

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
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
  tags: ['autodocs'],
} satisfies Meta<typeof Pagination>

export default meta
type Story = StoryObj<typeof meta>

export const PaginationStories: Story = {
  args: {
    currentPage: 1,
    pageCount: 10,
    changePage: (value: number) => {
      console.log(value)
    },
    changeRows: (value: string) => {
      console.log(value)
    },
    rowsValue: '10',
  },
}
