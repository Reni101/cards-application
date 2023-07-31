import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '../button'
import { Typography } from '../typography'

import { ModalConfirm } from './modal-confirm'

import { Modal } from './'

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {
    children: { control: { type: 'ReactNode' } },
    trigger: { control: { type: 'ReactNode' } },
    title: { control: { type: 'text' } },
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
    title: 'Delete Card',
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

export const ModalAndConfirm: Story = {
  args: {
    trigger: <Button>Open Modal</Button>,
    title: 'Delete Card',
  },
  render: ({ trigger, title }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
      <>
        <Modal trigger={trigger} isOpen={isOpen} onOpenChange={setIsOpen} title={title}>
          <>
            <p style={{ maxWidth: '310px', margin: '0', marginBottom: '1.12rem' }}>
              Do you really want to remove Card Name? All cards will be deleted.
            </p>
            <ModalConfirm>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                <Typography variant="subtitle2">Cancel</Typography>
              </Button>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                <Typography variant="subtitle2">Delete Card</Typography>
              </Button>
            </ModalConfirm>
          </>
        </Modal>
      </>
    )
  },
}
