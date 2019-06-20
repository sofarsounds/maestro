import styled from '../../lib/styledComponents';

import { inputBaseStyle, InputProps } from './Base';

export default styled.input<InputProps>`
  ${({ theme, ...props }) => inputBaseStyle(theme, props)};
`;
