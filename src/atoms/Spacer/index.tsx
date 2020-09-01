import React from 'react';
import styled from 'styled-components';

import { withSpacing } from '../../util';

const Spacer = styled.div`
  ${withSpacing};
`;

export default Spacer;
export const Spacer4: React.SFC = () => (
  <Spacer mr={[1, 1, 1]} mb={[1, 1, 1]} />
);
export const Spacer8: React.SFC = () => (
  <Spacer mr={[2, 2, 2]} mb={[2, 2, 2]} />
);
export const Spacer12: React.SFC = () => (
  <Spacer mr={[3, 3, 3]} mb={[3, 3, 3]} />
);
export const Spacer16: React.SFC = () => (
  <Spacer mr={[4, 4, 4]} mb={[4, 4, 4]} />
);
export const Spacer20: React.SFC = () => (
  <Spacer mr={[5, 5, 5]} mb={[5, 5, 5]} />
);
export const Spacer24: React.SFC = () => (
  <Spacer mr={[6, 6, 6]} mb={[6, 6, 6]} />
);
export const Spacer32: React.SFC = () => (
  <Spacer mr={[8, 8, 8]} mb={[8, 8, 8]} />
);
export const Spacer40: React.SFC = () => (
  <Spacer mr={[10, 10, 10]} mb={[10, 10, 10]} />
);
export const Spacer48: React.SFC = () => (
  <Spacer mr={[12, 12, 12]} mb={[12, 12, 12]} />
);
export const Spacer56: React.SFC = () => (
  <Spacer mr={[14, 14, 14]} mb={[14, 14, 14]} />
);
export const Spacer64: React.SFC = () => (
  <Spacer mr={[16, 16, 16]} mb={[16, 16, 16]} />
);
export const Spacer72: React.SFC = () => (
  <Spacer mr={[18, 18, 18]} mb={[18, 18, 18]} />
);
export const Spacer80: React.SFC = () => (
  <Spacer mr={[20, 20, 20]} mb={[20, 20, 20]} />
);
