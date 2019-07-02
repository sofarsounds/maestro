import styled, { css } from '../../lib/styledComponents';

export default styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${theme.media.md`
        max-width: 85%;
      `}

    ${theme.media.lg`
        max-width: 80%;
      `}
  `}
`;
