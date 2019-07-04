import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import {
  Navbar,
  Pagination,
  Modal,
  useModal,
  HeroImage,
  PrimaryButton,
  Textfield,
  FormGroup
} from 'uikit';

storiesOf('05 / Molecules|Pagination', module).add('Pagination', () => (
  <div>
    <h1>Pagination</h1>

    <div>
      <Pagination
        currentPage={1}
        onPageChange={p => {
          action(`Page changed to ${p}`);
        }}
        totalRecords={40}
      />
    </div>

    <br />
    <br />

    <div>
      <Pagination
        currentPage={2}
        onPageChange={p => {
          action(`Page changed to ${p}`);
        }}
        totalRecords={80}
      />
    </div>

    <br />
    <br />

    <div>
      <Pagination
        currentPage={12}
        onPageChange={p => {
          action(`Page changed to ${p}`);
        }}
        totalRecords={300}
      />
    </div>
  </div>
));

storiesOf('05 / Molecules|Navbar', module).add('Navbar', () => (
  <div style={{ paddingTop: '100px' }}>
    <h1>Navbar Component</h1>
    <Navbar>
      <Navbar.ItemContainer>
        <span style={{ color: '#fff' }}>LEFT</span>
      </Navbar.ItemContainer>
      <Navbar.ItemContainer align="right">
        <Navbar.Item href="#">London</Navbar.Item>
        <Navbar.Item href="#">Perform</Navbar.Item>
        <Navbar.Item>Host</Navbar.Item>
        <Navbar.Item>Your Events</Navbar.Item>
        <Navbar.Item>Your Account</Navbar.Item>
        <Navbar.Item>English</Navbar.Item>
      </Navbar.ItemContainer>
    </Navbar>

    <div style={{ height: '500px' }}>Scrollable Content</div>
  </div>
));

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

storiesOf('05 / Molecules|Modal', module).add('Modal', () => <ModalExample />);

storiesOf('05 / Molecules|HeroImage', module)
  .add('Default', () => (
    <HeroImage
      height="400px"
      imageURL="https://www.stratatiles.co.uk/wp-content/uploads/2015/04/102.jpg"
      title="I am the Title"
      subtitle="I am a subtitle"
    />
  ))
  .add('With Children', () => (
    <HeroImage
      height="400px"
      imageURL="https://www.stratatiles.co.uk/wp-content/uploads/2015/04/102.jpg"
      title="I am the Title"
      subtitle="I am a subtitle"
    >
      <PrimaryButton>An Action</PrimaryButton>
    </HeroImage>
  ));

storiesOf('05 / Molecules|FormGroup', module)
  .addDecorator(withKnobs)
  .add('FormGroup', () => (
    <FormGroup
      label={text('Label', 'Email address')}
      required={boolean('Required', true)}
      errorMsg={text('Error Msg', null)}
    >
      <Textfield placeholder="your@email.com" />
    </FormGroup>
  ));
