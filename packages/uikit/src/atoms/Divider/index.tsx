import styled from 'styled-components';

export default styled.hr`
  border: none;
  border-top: 1px solid ${({ theme }) => theme.colours.macyGrey};
  width: 100%;
  margin: ${({ theme }) => theme.ruler[11]}px 0;
`;
