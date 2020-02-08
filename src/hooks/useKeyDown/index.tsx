import { useEffect } from 'react';

const useKeyDown = (key: string, callback: (e: any) => void) => {
  const handleKeyDown = (e: any) => {
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
