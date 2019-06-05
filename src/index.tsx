import * as React from 'react';

import styled, {css } from 'styled-components'

interface ButtonProps {
  success: string;
}
export default styled.button<ButtonProps>`
  ${({ success }) => css`
    background: ${success ? 'green' : 'red'};
  color:#fff;
  `}
`

