import React from 'react';
import { ReactWrapper } from 'enzyme';
import { mountWithTheme } from '../../test';

import { Modal } from './';
import { LinkButton as Button } from '../../atoms/Button';

let wrapper: ReactWrapper;

const hideMock = jest.fn();

function setup(isShowing: boolean, hide: () => {}, children: any) {
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

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Exiting the modal when it is open', () => {
    beforeEach(() => {
      wrapper = setup(true, hideMock, <>Some visible text</>);
    });

    it('closes the modal when you click on the X button', () => {
      const xButton = wrapper.find(Button);

      xButton.simulate('click');

      expect(hideMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('When isShowing is false', () => {
    beforeEach(() => {
      wrapper = setup(false, hideMock, <>Some other children</>);
    });

    it('matches the snapshot', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('does not render anything', () => {
      expect(wrapper).toEqual({});
    });
  });
});
