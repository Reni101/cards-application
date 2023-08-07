import type { Meta, StoryObj } from '@storybook/react'

import { Table } from './'

const meta = {
  title: 'Components/Table',
  component: Table,
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
} satisfies Meta<typeof Table>

export default meta
type Story = StoryObj<typeof meta>

const data = [
  {
    title: 'Pack name A',
    cardsCount: 10,
    updated: '2023-07-07',
    createdBy: 'John Doe',
  },
  {
    title: 'Pack name B',
    cardsCount: 5,
    updated: '2023-07-06',
    createdBy: 'Jane Smith',
  },
  {
    title: 'Pack name C',
    cardsCount: 8,
    updated: '2023-07-05',
    createdBy: 'Alice Johnson',
  },
  {
    title: 'Pack name D',
    cardsCount: 3,
    updated: '2023-07-07',
    createdBy: 'Bob Anderson',
  },
  {
    title: 'Pack name E',
    cardsCount: 12,
    updated: '2023-07-04',
    createdBy: 'Emma Davis',
  },
]

const dataHead = [
  {
    key: 'name',
    label: 'Name',
    isSortable: true,
  },
  {
    key: 'cards',
    label: 'Cards',
    isSortable: true,
  },
  {
    key: 'updated',
    label: 'Last Updated',
    isSortable: true,
  },
  {
    key: 'created',
    label: 'Created by',
    isSortable: true,
  },
  {
    key: 'options',
    label: '',
  },
]

export const Default: Story = {
  args: {
    options: data,
    dataHeader: dataHead,
  },
}
