import styled, { css } from '../../lib/styledComponents';

export default styled.div`
  ${({ theme }) => css`
    flex: 1;
    padding-top: ${theme.ruler[4]}px;

    ${theme.media.md`
      padding: ${theme.ruler[4]}px ${theme.ruler[7]}px;
    `}
  `}
`;
