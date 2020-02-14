import styled, { css, keyframes } from '../../lib/styledComponents';

const load8 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

interface Props {
  size?: string;
  invert?: boolean;
  'data-qaid'?: string;
}

export default styled.div<Props>`
  ${({ theme, size = '25px', invert }) => css`
    &:after {
      border-radius: 50%;
      width: 10em;
      height: 10em;
    }
    position: relative;
    border-top: 2px solid transparent;
    border-right: 2px solid transparent;
    border-bottom: 2px solid transparent;
    border-left: 2px solid ${theme.colors[invert ? 'whiteDenim' : 'macyGrey']};
    transform: translateZ(0);
    animation: ${load8} 0.5s infinite linear;
    border-radius: 50%;
    width: ${size};
    height: ${size};
  `};
`;
