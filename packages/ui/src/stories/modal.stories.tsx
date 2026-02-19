import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Button } from '../components/button';
import { Modal } from '../components/modal';

const meta: Meta<typeof Modal> = { title: 'Primitives/Modal', component: Modal };
export default meta;

export const Basic: StoryObj<typeof Modal> = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Dialog demo">
          Contenuto del modal.
        </Modal>
      </>
    );
  }
};
