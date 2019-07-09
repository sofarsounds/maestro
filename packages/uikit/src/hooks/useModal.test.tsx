import React from 'react';

const mockSetState = jest.fn();
jest.mock('react', () => ({
  useState: (initial: any) => [initial, mockSetState],
  useEffect: () => React.useLayoutEffect
}));

import useModal from './useModal';

describe('useModal', () => {
  it('sets the isShowing value to true', () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [, toggleModal] = useModal();
    toggleModal();
    expect(mockSetState).toHaveBeenCalledWith(true);
  });

  it('returns the expected modal builder object', () => {
    const [modal] = useModal();

    expect(modal).toEqual(
      expect.objectContaining({
        isShowing: false,
        hide: expect.anything()
      })
    );
  });
});
