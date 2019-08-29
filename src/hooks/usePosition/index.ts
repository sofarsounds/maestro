import { useCallback, useState, useLayoutEffect } from 'react';

interface ReturnRect {
  width: number;
  height: number;
  left: number;
  top: number;
}
const getOffset = (el: any) => {
  if (!el) {
    return { top: 0, left: 0 };
  }
  const rect = el.getBoundingClientRect();

  return {
    top: rect.top, // + winY,
    left: rect.left //  + winX
  };
};

export const getPosition = (el: any): ReturnRect => {
  if (!el) {
    return { top: 0, left: 0, width: 0, height: 0 };
  }
  let offset = getOffset(el);
  let parentOffset = { top: 0, left: 0 };

  return {
    top: offset.top - parentOffset.top,
    left: offset.left - parentOffset.left,
    width: el.getBoundingClientRect().width || 0,
    height: el.getBoundingClientRect().height || 0
  };
};

export default (ref: any): ReturnRect => {
  let { top, width, height, left } = getPosition(ref.current);
  let [ElementPosition, setElementPosition] = useState({
    top,
    left,
    width,
    height
  });

  const handleChangePosition = useCallback(() => {
    if (ref && ref.current) {
      setElementPosition(getPosition(ref.current));
    }
  }, [ref]);

  useLayoutEffect(() => {
    handleChangePosition();
    window.addEventListener('resize', handleChangePosition);

    return () => {
      window.removeEventListener('resize', handleChangePosition);
    };
  }, [handleChangePosition, ref]);

  return ElementPosition;
};
