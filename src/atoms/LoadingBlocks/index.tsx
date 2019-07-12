import styled, { css, keyframes } from 'styled-components';

import { withSpacing, WithSpacingProps } from '../../util';

const animation = keyframes`
    0%{
        background-position: 0px 0
    }
    100%{
        background-position: 4000px 0
    }
}
`;

interface BoxProps extends WithSpacingProps {
  width: string;
}

interface RectangleProps extends WithSpacingProps {
  width: string;
  height: string;
}

export const Animation = styled.div`
  animation-duration: 1.25s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${animation};
  animation-timing-function: linear;
  background-color: #f6f6f6;
  background: linear-gradient(to right, #f6f6f6 8%, #f0f0f0 18%, #f6f6f6 33%);
  background-size: 4000px 104px;
  position: relative;
`;

const Box = styled(Animation)<BoxProps>`
  ${withSpacing}
  ${({ width }) => css`
    width: ${width};
    height: ${width};
    border-radius: 2px;
  `}
`;

const Circle = styled(Animation)<BoxProps>`
  ${withSpacing}
  ${({ width }) => css`
    width: ${width};
    height: ${width};
    border-radius: 100%;
  `}
`;

const Rectangle = styled(Animation)<RectangleProps>`
  ${withSpacing}
  ${({ width, height }) => css`
    width: ${width};
    height: ${height};
    border-radius: 2px;
  `}
`;

export default {
  Box,
  Circle,
  Rectangle
};
