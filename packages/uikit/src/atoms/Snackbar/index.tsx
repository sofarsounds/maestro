import React from 'react';
import styled, { css } from '../../lib/styledComponents';
import Icon from '../../atoms/Icon';
import theme from '../../theme';

interface SnackbarProps {
  text?: string;
  onCancel: () => void;
}

export const DismissSnackbarIconContainer = styled.div`
  padding: 20px 24px 0px 0px;
`;

const DismissSnackbarIconStyled = (p: any) => (
  <Icon {...p} size="16px" colour={theme.colours.whiteDenim} />
);

export const SnackbarTextStyled = styled.div`
  ${({ theme }) => css`
    font-size: 14px;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.71;
    letter-spacing: 0.1px;
    padding: 16px 0px 16px 24px;
    color: ${theme.colours.whiteDenim};
  `}
`;

const SnackbarStyled = styled.div`
  ${({ theme }) => css`
    border-radius: 8px;
    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: ${theme.colours.backToBlack};
    display: flex;
    justify-content: space-between;
  `}
`;

const Snackbar: React.SFC<SnackbarProps> = ({ text, onCancel }) => (
  <SnackbarStyled>
    <SnackbarTextStyled>{text}</SnackbarTextStyled>
    <DismissSnackbarIconContainer onClick={onCancel}>
      <DismissSnackbarIconStyled name="close" />
    </DismissSnackbarIconContainer>
  </SnackbarStyled>
);

export default Snackbar;
