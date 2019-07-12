import styled, { css } from 'styled-components';

export default styled.img`
  ${({ theme }) => css`
    border-radius: ${theme.borderRadius.default};
    width: 100%;
  `}
`;
