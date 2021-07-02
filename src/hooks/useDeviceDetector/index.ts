import { useState, useEffect } from 'react';

export default () => {
  const [deviceType, setDeviceType] = useState('');

  useEffect(() => {
    let hasTouchScreen = false;
    if ('maxTouchPoints' in navigator) {
      hasTouchScreen = navigator.maxTouchPoints > 0;
    } else if ('msMaxTouchPoints' in navigator) {
      hasTouchScreen = (navigator as any).msMaxTouchPoints > 0;
    } else {
      if (typeof window !== undefined) {
        const mQ = matchMedia('(pointer:coarse)');
        if (mQ && mQ.media === '(pointer:coarse)') {
          hasTouchScreen = !!mQ.matches;
        } else if ('orientation' in window) {
          hasTouchScreen = true;
        } else {
          // Only as a last resort, fall back to user agent sniffing
          var UA = (navigator as any).userAgent;
          hasTouchScreen =
            /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
            /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA);
        }
      }
    }
    if (hasTouchScreen) {
      setDeviceType('mobile');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  return deviceType;
};
