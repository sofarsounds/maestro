import React from 'react';
import styled, { css } from 'styled-components';

import Container from '../../atoms/Container';

import Icon from '../../atoms/Icon';
import theme from '../../theme';

const RowContainer = styled(Container)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    ${theme.media.md`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

      flex-direction: row;
    `}
  `}
`;

export const IconStyled = (p: any) => (
  <Icon {...p} size="40px" colour={theme.colours.blueSmoke} />
);

export const CopyrightContainer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colours.backToBlack};
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${theme.ruler[4]}px 0;

    * {
      color: ${theme.colours.whiteDenim};
    }

    ${theme.media.md`
      padding: 0;
      height: 100px;
    `}
  `}
`;

export const SocialIcons = styled.div`
  a {
    margin-right: ${({ theme }) => theme.ruler[2]}px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export const CopyrightMsg = styled.div`
  text-align: center;
  font-size: 14px;
  margin-top: ${({ theme }) => theme.ruler[4]}px;

  ${({ theme }) => theme.media.md`
    margin-top: 0;
    text-align: right;
  `}
`;

const Bottom: React.SFC<any> = ({ children }) => (
  <CopyrightContainer>
    <RowContainer>{children}</RowContainer>
  </CopyrightContainer>
);

export default Bottom;
