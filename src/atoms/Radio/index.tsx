import React from 'react';
import styled, { css } from '../../lib/styledComponents';
import { makeOpaque } from '../../lib';
import { Body2 } from '../Typography';

const Center = styled.label`
  display: flex;
  align-items: center;
`;

export const Circle = styled.label`
  ${({ theme }) => css`
    border-radius: 100%;
    display: block;
    width: ${theme.dimensions.radioBox};
    height: ${theme.dimensions.radioBox};
    transition: all 0.1s ease-out;

    &:hover {
      box-shadow: 0px 0px 0px 8px ${makeOpaque(theme.colors.blackBetty, 0.1)},
        inset 0 0 0 10px ${makeOpaque(theme.colors.blackBetty, 0.1)};
    }

    &::before {
      content: '';
      border: 2px solid rgba(0, 0, 0, 0.75);
      border-radius: 100%;
      background-color: transparent;
      display: block;
      box-sizing: border-box;
      width: ${theme.dimensions.radioBox};
      height: ${theme.dimensions.radioBox};
      vertical-align: top;
      cursor: pointer;
      transition: all 0.1s ease-out;
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    position: absolute;
    top: auto;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    white-space: nowrap;

    &:checked + ${Circle}:hover {
      box-shadow: 0px 0px 0px 8px ${makeOpaque(theme.colors.primary, 0.1)};
    }

    &:checked + ${Circle}::before {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
      box-shadow: inset 0 0 0 3px ${theme.colors.whiteDenim};
    }

    &:disabled + ${Circle}:hover {
      box-shadow: none;
    }

    &:disabled + ${Circle}::before {
      border-color: ${theme.colors.macyGrey};
      background-color: transparent;
      cursor: not-allowed;
    }
  `}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: ${theme.dimensions.radioBox};
    height: ${theme.dimensions.radioBox};
    border-radius: 100%;
    display: inline-block;
  `}
`;

export const Label = styled(Body2)<any>`
  ${({ theme, disabled }) => css`
    margin-left: 10px;

    ${disabled &&
      css`
        color: ${theme.colors.macyGrey};
      `}
  `}
`;

interface Props {
  'data-qaid'?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  checked?: boolean;
  value?: string;
  id: string;
  name: string;
}

const Radio: React.SFC<Props> = ({
  children,
  'data-qaid': qaId = '',
  ...props
}) => (
  <Center htmlFor={props.id}>
    <Wrapper>
      <Input type="radio" {...props} />
      <Circle htmlFor={props.id} data-qaid={qaId} />
    </Wrapper>
    {children && (
      <Label disabled={props.disabled} data-qaid={`${qaId}-label`}>
        {children}
      </Label>
    )}
  </Center>
);

export default Radio;
