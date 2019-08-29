import { useCallback, useState, useEffect } from 'react';

export default () => {
  const isClient = typeof window === 'object';

  const getSize = useCallback((): number[] => {
    return [
      isClient ? window.innerWidth : 0,
      isClient ? window.innerHeight : 0
    ];
  }, [isClient]);

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    const handleResize = () => {
      setWindowSize(getSize());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getSize, isClient]);

  return windowSize;
};
