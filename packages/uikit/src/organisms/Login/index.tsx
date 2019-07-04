import React, { useState } from 'react';

import Container from '../../atoms/Container';
import { Textfield } from '../../atoms/FormElements';
import { PrimaryButton as Button } from '../../atoms/Button';
import Spacer from '../../atoms/Spacer';
import { Modal, useModal } from '../..';

export interface LoginProps {
  handleSubmit(email: string, password: string): Function;
  showInModal: boolean;
}

const Login: React.SFC<LoginProps> = ({
  handleSubmit,
  showInModal = false
}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const Login = () => (
    <Container size="small">
      <form onSubmit={() => handleSubmit}>
        <Textfield
          type="email"
          placeholder="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Spacer mt={5} />
        <Textfield
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Spacer mt={5} />
        <Button
          onClick={e => {
            e.preventDefault();

            handleSubmit(email, password);
          }}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );

  const [modal] = useModal();

  if (showInModal) {
    modal.isShowing = !modal.isShowing;
    return <Modal {...modal}>{Login()}</Modal>;
  } else {
    return Login();
  }
};

export default Login;
