import styled from '../../lib/styledComponents';

import { H4, Body2 } from '../../atoms/Typography';

export const Title = styled(H4)`
  margin-bottom: ${({ theme }) => theme.ruler[4]}px;
`;

export const Footer = styled.div`
  margin-top: ${({ theme }) => theme.ruler[8]}px;
`;

export const Preview = Body2;
