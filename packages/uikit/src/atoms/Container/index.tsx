import styled, { css } from 'styled-components';

// type Sizes = 'default' | 'small' | 'large' | 'fullscreen';
interface ContainerProps {
  size?: string;
}

export default styled.div<ContainerProps>`
  ${({ theme }) => css`
    width: 100%;
    margin: 0 auto;

    padding: 0 ${theme.ruler[5]};

    ${theme.media.sm`
      max-width: 540px;
    `}

    ${theme.media.sm`
      max-width: 720px;
    `}

    ${theme.media.lg`
      max-width:960px;
    `}

    ${theme.media.xl`
      max-width: 1140px;
    `}
  `}
`;
