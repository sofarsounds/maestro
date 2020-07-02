import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import { Modal, useModal, PrimaryButton } from '../../src';

function ModalExample() {
  const [modal, toggleModal] = useModal();

  return (
    <>
      <h1>Modal</h1>
      <PrimaryButton onClick={toggleModal}>Click me</PrimaryButton>
      <Modal {...modal}>
        <p>Hello</p>
      </Modal>
    </>
  );
}

storiesOf('Modal', module)
  .addDecorator(withKnobs)
  .add('Basic', () => <ModalExample />);
