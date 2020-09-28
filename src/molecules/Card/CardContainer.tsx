import styled, { css } from '../../lib/styledComponents';

import { Title, Preview, Footer } from './CardElements';

interface CardContainerProps {
  inverted?: boolean;
  clickable?: boolean;
  reverseRow?: boolean;
}

export default styled.div<CardContainerProps>`
  ${({ theme, inverted, clickable, reverseRow }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.md`
      flex-direction: ${reverseRow ? 'row-reverse' : 'row'};
    `}

    ${inverted &&
      css`
      ${Title}, ${Preview}, ${Footer} {
        color: ${theme.colors.whiteDenim};
      }
    `}

    ${clickable &&
      css`
        &:hover {
          ${Title} {
            text-decoration: underline;
            color: ${theme.colors.primary};
          }
        }
      `}
  `}
`;
