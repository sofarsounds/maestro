import React from 'react';

import { breakPoints } from '../../theme';

interface Props {
  children: any;

  hide?: string;
  show?: string;

  hideUp?: string;
  showUp?: string;
}

const hasWindow = typeof window !== 'undefined';

const findNext = (key: string): string | null => {
  const keys = Object.keys(breakPoints);

  if (keys.indexOf(key) > -1) {
    const nextIndex = keys.indexOf(key) + 1;
    var next = keys[nextIndex];
    return next ? next : null;
  }

  return null;
};

const isInBoundary = (
  screenSize: string,
  windowSize: number,
  noLimit?: boolean
) => {
  const minWidth = breakPoints[screenSize];
  const nextSize = findNext(screenSize);

  if (!nextSize || noLimit) {
    return windowSize >= minWidth;
  }

  const maxWidth = breakPoints[nextSize];

  return windowSize >= minWidth && windowSize < maxWidth;
};

interface State {
  windowSize: number;
}
export default class Responsive extends React.Component<Props, State> {
  public readonly state: State = {
    windowSize: hasWindow ? window.innerWidth : 0
  };

  public componentDidMount = () => {
    if (hasWindow) {
      window.addEventListener('resize', this.handleResize);
    }
  };

  public componentWillUnmount = () => {
    if (hasWindow) {
      window.removeEventListener('resize', this.handleResize);
    }
  };

  private handleResize = () => {
    this.setState({ windowSize: window.innerWidth });
  };

  public render() {
    const { hide, hideUp, show, showUp, children } = this.props;
    const { windowSize } = this.state;

    if (hide || hideUp) {
      const useHideProp = hide || hideUp;
      switch (useHideProp) {
        case 'xs':
          return isInBoundary('xs', windowSize, !hide) ? null : children;
        case 'sm':
          return isInBoundary('sm', windowSize, !hide) ? null : children;
        case 'md':
          return isInBoundary('md', windowSize, !hide) ? null : children;
        case 'lg':
          return isInBoundary('lg', windowSize, !hide) ? null : children;
        case 'xl':
          return isInBoundary('xl', windowSize, !hide) ? null : children;
        default:
          return children;
      }
    }

    if (show || showUp) {
      const useShowProp = show || showUp;
      switch (useShowProp) {
        case 'xs':
          return !isInBoundary('xs', windowSize, !show) ? null : children;
        case 'sm':
          return !isInBoundary('sm', windowSize, !show) ? null : children;
        case 'md':
          return !isInBoundary('md', windowSize, !show) ? null : children;
        case 'lg':
          return !isInBoundary('lg', windowSize, !show) ? null : children;
        case 'xl':
          return !isInBoundary('xl', windowSize, !show) ? null : children;
        default:
          return children;
      }
    }

    return children;
  }
}
