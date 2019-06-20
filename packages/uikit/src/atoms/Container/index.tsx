import styled, { css } from 'styled-components';

type Sizes = 'default' | 'small' | 'large' | 'fullscreen';
interface ContainerProps {
  size?: string;
}

export default styled.div<ContainerProps>`
  ${({ theme, size }) => css`
    width: 100%;
    max-width: ${theme.dimensions.containerWidth[(size || 'default') as Sizes]};
    margin: 0 auto;
  `}
`;
