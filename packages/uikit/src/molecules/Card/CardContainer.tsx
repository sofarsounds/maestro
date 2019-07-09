import styled, { css } from '../../lib/styledComponents';
import { Overline } from '../../atoms/Typography';

export default styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${theme.media.md`
      flex-direction: row;
    `}
  `}
`;
