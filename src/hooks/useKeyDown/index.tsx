import { useEffect } from 'react';

const useKeyDown = (key: string, callback: (e: KeyboardEvent) => void) => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === key) {
      callback(e);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
};

export default useKeyDown;
