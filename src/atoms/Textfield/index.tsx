import styled from '../../lib/styledComponents';
import { InputProps } from '../../typings/input';
import { withTextfieldStyle } from '../../util';

export default styled.input<InputProps>`
  ${withTextfieldStyle};
`;
