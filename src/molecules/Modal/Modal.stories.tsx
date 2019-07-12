import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';

import Modal from './index'
import { useModal} from '../../hooks'
import { PrimaryButton} from '../../atoms/Button'

function ModalExample() {
  const [modal, toggleModal] = useModal();

  return (
    <>
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
