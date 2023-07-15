import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'

import { Modal } from './'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'ReactNode' } },
    trigger: { control: { type: 'ReactNode' } },
    title: { control: { type: 'text' } },
    btnName: { control: { type: 'text' } },
    isShowBtn: { control: { type: 'boolean' } },
  },
} satisfies Meta<typeof Modal>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <p style={{ maxWidth: '310px', margin: '0' }}>
        Do you really want to remove Card Name? All cards will be deleted.
      </p>
    ),
    trigger: <Button>Open Modal</Button>,
  },
  render: ({ children, trigger }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Modal trigger={trigger} isOpen={isOpen} onOpenChange={setIsOpen}>
          {children}
        </Modal>
      </>
    )
  },
}

export const ModalTitle: Story = {
  args: {
    children: (
      <p style={{ maxWidth: '310px', margin: '0' }}>
        Do you really want to remove Card Name? All cards will be deleted.
      </p>
    ),
    trigger: <Button>Open Modal</Button>,
    title: 'Edit Card',
  },
  render: ({ children, trigger, title }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Modal trigger={trigger} isOpen={isOpen} onOpenChange={setIsOpen} title={title}>
          {children}
        </Modal>
      </>
    )
  },
}

export const ModalButtons: Story = {
  args: {
    children: (
      <p style={{ maxWidth: '310px', margin: '0' }}>
        Do you really want to remove Card Name? All cards will be deleted.
      </p>
    ),
    trigger: <Button>Open Modal</Button>,
    title: 'Edit Card',
    btnName: 'Save Edit',
    isShowBtn: true,
  },
  render: ({ children, trigger, title, btnName, isShowBtn }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Modal
          trigger={trigger}
          isOpen={isOpen}
          onOpenChange={setIsOpen}
          title={title}
          btnName={btnName}
          isShowBtn={isShowBtn}
        >
          {children}
        </Modal>
      </>
    )
  },
}
