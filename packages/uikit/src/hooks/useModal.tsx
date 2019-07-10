import { useState, useEffect } from 'react';

export interface UseModalProps {
  isShowing: boolean;
  hide: () => void;
}

const useModal = (): [UseModalProps, () => void] => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleKeyDown(event: KeyboardEvent) {
    if (event.keyCode !== 27) return;

    toggle();
  }

  useEffect(() => {
    if (isShowing) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, isShowing]);

  const returnValue: UseModalProps = {
    isShowing,
    hide: toggle
  };

  return [returnValue, toggle];
};

export default useModal;
