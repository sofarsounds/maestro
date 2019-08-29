import { useEffect } from 'react';

import { usePrev } from '../index';

const hasDocument = typeof document !== 'undefined';
const initialOverflowY = hasDocument && document.body.style.overflow;

export default (isOpen: boolean, disableScrollWhenOpen: boolean) => {
  const prevIsOpen = usePrev(isOpen);

  useEffect(() => {
    if (isOpen && disableScrollWhenOpen) {
      document.body.style.overflow = 'hidden';
    }

    if (disableScrollWhenOpen && prevIsOpen && !isOpen) {
      document.body.style.overflow = initialOverflowY || 'initial';
    }
  }, [prevIsOpen, isOpen, disableScrollWhenOpen]);
};
