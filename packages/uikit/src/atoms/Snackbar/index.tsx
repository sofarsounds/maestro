import React from 'react';

import styled, { css } from '../../lib/styledComponents';
import { Body2 } from '../Typography';
import { withShadow } from '../../util';
import Icon from '../Icon';
import theme from '../../theme';

interface SnackbarProps {
  children: any;
  onCancel: () => void;
  'data-qaid'?: string;
}

const SnackbarStyled = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    background-color: ${theme.colours.backToBlack};
    display: flex;
    justify-content: space-between;
    padding: ${theme.ruler[4]}px ${theme.ruler[6]}px;

    ${withShadow({ depth: 3 })};
  `}
`;

interface IconProps {
  onClick: () => void;
}
export const CancelButton = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
`;

const Snackbar: React.SFC<SnackbarProps> = ({
  children,
  onCancel,
  'data-qaid': qaId = ''
}) => (
  <SnackbarStyled data-qaid={qaId}>
    <Body2 colour="#fff" data-qaid={`${qaId}-text`}>
      {children}
    </Body2>

    <CancelButton onClick={onCancel} data-qaid={`${qaId}-cancel`}>
      <Icon name="close" size="16px" colour={theme.colours.whiteDenim} />
    </CancelButton>
  </SnackbarStyled>
);

export default Snackbar;
