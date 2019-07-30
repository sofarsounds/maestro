import * as React from 'react';
import { findDOMNode } from 'react-dom';
import styled, { css } from '../../lib/styledComponents';

export type StickTo = 'top' | 'bottom';
export interface DOMRect {
  left: number;
  top: number;
  height: number;
  width: number;
}

interface StickyContainerProps {
  innerRef?: React.RefObject<HTMLInputElement>;
  onMouseUp?: (ev: React.MouseEvent<HTMLDivElement>) => void;
  stickToEl: Element | Text | null;
  stickTo?: StickTo;
  offsetTop?: number;
  positionFixed?: boolean;
  styleOptions?: [string];
}

interface ComponentStyle {
  left: number;
  top: number;
  maxHeight?: number;
  width: number | string;
}

interface State {
  initTop: number;
  stickTo: DOMRect;
  componentHeight: number;
  componentStyle: ComponentStyle;
  el: Element | Text | null;
}

const StyledStickyContainer = styled.div<StickyContainerProps>`
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.navbar + 1};
  ${({ positionFixed }) =>
    positionFixed &&
    css`
      position: fixed;
      z-index: 999;
    `};

  ${props => props.styleOptions};
`;

const INITIAL_COMPONENT_STYLE = { left: -9999, width: 'auto', top: -9999 };

const getPositionData = (
  stickToEl: Element,
  componentStyle: ComponentStyle,
  stickTo: StickTo = 'bottom',
  positionFixed?: boolean
) => {
  const {
    width,
    left: elLeft,
    height,
    top,
    bottom
  } = stickToEl.getBoundingClientRect();
  const left = elLeft + window.scrollX;

  if (width !== componentStyle.width || left !== componentStyle.width) {
    componentStyle = {
      ...componentStyle,
      width,
      left
    };
  }

  const adjustBy = positionFixed ? 0 : window.scrollY;
  const positionTop = (stickTo === 'top' ? top : bottom) + adjustBy;

  return {
    stickTo: {
      top: positionTop,
      height,
      left,
      width
    },
    componentStyle
  };
};

const getComponentStyle = (
  stickTo: DOMRect,
  componentHeight: number,
  offsetTop: number
) => {
  const { innerHeight: winHeight, scrollY: winScrollY } = window;

  const { width, left, top, height } = stickTo;
  const style: ComponentStyle = { left, width, top };
  const toTheTop = top - winScrollY;
  const toTheBottom = winScrollY + winHeight - (top + height);

  if (toTheBottom < componentHeight) {
    if (toTheTop > componentHeight) {
      style.top = top - componentHeight + height;
    } else {
      style.maxHeight = toTheBottom;
    }
  }

  if (offsetTop) {
    style.top = top + offsetTop;
  }

  return style;
};

export default class StickyContainer extends React.Component<
  StickyContainerProps
> {
  static defaultProps = {
    stickTo: 'bottom'
  };

  state: State;

  constructor(props: StickyContainerProps) {
    super(props);
    this.state = {
      initTop: 0,
      stickTo: { left: 0, top: 0, height: 0, width: 0 },
      componentHeight: 0,
      componentStyle: { ...INITIAL_COMPONENT_STYLE },
      el: null
    };
  }

  componentDidMount() {
    this.setState({ el: findDOMNode(this) });
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize = () => {
    const { stickTo, stickToEl } = this.props;

    if (stickToEl instanceof Element) {
      const { componentStyle } = this.state;
      this.setState({
        ...getPositionData(stickToEl, componentStyle, stickTo),
        initTop: stickToEl.getBoundingClientRect()[stickTo || 'top']
      });
    }
  };

  componentDidUpdate(prevProps: StickyContainerProps, prevState: State) {
    if (this.state.el instanceof Element) {
      const { componentStyle } = this.state;
      const { height } = this.state.el.getBoundingClientRect();
      const {
        positionFixed,
        offsetTop = 0,
        stickToEl,
        stickTo = 'top'
      } = this.props;

      if (stickToEl instanceof Element) {
        if (height !== prevState.componentHeight) {
          const recalcPositionData = getPositionData(
            stickToEl,
            componentStyle,
            stickTo,
            positionFixed
          );

          this.setState({
            componentHeight: height,
            componentStyle:
              height === 0
                ? INITIAL_COMPONENT_STYLE
                : getComponentStyle(
                    recalcPositionData.stickTo,
                    height,
                    offsetTop
                  )
          });
        } else {
          const elementPos = stickToEl.getBoundingClientRect()[stickTo];
          const adjustBy = positionFixed ? 0 : window.scrollY;
          const calcPos = elementPos + adjustBy;

          if (prevState.initTop !== calcPos) {
            this.setState({
              initTop: calcPos,
              componentStyle: {
                ...componentStyle,
                top: calcPos
              }
            });
          }
        }
      }
    }

    if (prevProps.stickTo !== this.props.stickTo) {
      this.onResize();
    }
  }

  render() {
    return (
      <StyledStickyContainer {...this.props} style={this.state.componentStyle}>
        {this.props.children}
      </StyledStickyContainer>
    );
  }
}
