import styled, { css } from '../../lib/styledComponents';

import { Title, Preview, Footer } from './CardElements';

interface CardContainerProps {
  inverted?: boolean;
}

export default styled.div<CardContainerProps>`
  ${({ theme, inverted }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.md`
      flex-direction: row;
    `}

    ${inverted &&
      css`
      ${Title}, ${Preview}, ${Footer} {
        color: ${theme.colours.whiteDenim};
      }
      `}
  `}
`;