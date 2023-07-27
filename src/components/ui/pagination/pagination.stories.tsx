import { useState } from 'react'

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
  render: args => {
    const [page, setPage] = useState(1)
    const [rows, setRows] = useState('30')

    const onPageChanged = (pageNumber: number) => {
      setPage(pageNumber)
    }
    const onChangeRows = (value: string) => {
      setRows(value)
    }

    return (
      <>
        <Pagination
          {...args}
          currentPage={page}
          rowsValue={rows}
          changePage={onPageChanged}
          changeRows={onChangeRows}
        />
      </>
    )
  },
  args: {
    pageCount: 10,
    currentPage: 1,
    rowsValue: '10',
  },
}
