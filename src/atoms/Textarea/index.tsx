import styled, { css } from '../../lib/styledComponents';
import { InputProps } from '../../typings/input';
import { withTextfieldStyle } from '../../util';

export default styled.textarea<InputProps>`
  ${withTextfieldStyle};

  ${({ theme }) => css`
    height: auto;
    min-height: ${theme.dimensions.inputHeight};
    resize: none;
    padding: 16px;
  `}
`;
