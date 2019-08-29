import React from 'react';

import styled, { css } from '../../lib/styledComponents';
import { Body2 } from '../Typography';
import { withShadow } from '../../util';
import Icon from '../Icon';
import theme from '../../theme';

interface SnackbarProps {
  children: any;
  onCancel: () => void;
  id?: string;
  'data-qaid'?: string;
}

const SnackbarStyled = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    background-color: ${theme.colors.backToBlack};
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
  id,
  'data-qaid': qaId = ''
}) => (
  <SnackbarStyled id={id} data-qaid={qaId}>
    <Body2 color="#fff" data-qaid={`${qaId}-text`}>
      {children}
    </Body2>

    <CancelButton onClick={onCancel} data-qaid={`${qaId}-cancel`}>
      <Icon name="close" size="16px" color={theme.colors.whiteDenim} />
    </CancelButton>
  </SnackbarStyled>
);

export default Snackbar;
