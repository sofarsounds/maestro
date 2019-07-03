import React from 'react';
import { ReactWrapper } from 'enzyme';
import { mountWithTheme } from '../../test';

import { Modal } from './';

let wrapper: ReactWrapper;

const hideMock = jest.fn();

function setup(isShowing: boolean, hide: Function, children: any) {
  return mountWithTheme(
    <Modal isShowing={isShowing} hide={hide}>
      {children}
    </Modal>
  );
}

describe('<Modal />', () => {
  describe('When isShowing is true', () => {
    beforeEach(() => {
      wrapper = setup(true, hideMock, <>Some children</>);
    });

    it('renders all of constituent elements of the modal', () => {
      console.log(wrapper);
    });
  });
});
