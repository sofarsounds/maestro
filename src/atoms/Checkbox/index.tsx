import React from 'react';
import styled, { css } from '../../lib/styledComponents';
import { Body2 } from '../Typography';
import { makeOpaque } from '../../lib/color';

const Center = styled.label`
  display: flex;
  align-items: center;
`;

export const Tick = styled.div`
  position: absolute;
  display: none;
  top: -1px;
  left: -1px;
  width: 21px;
  height: 21px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
`;

export const TickStem = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 2px;
    height: 13px;
    background-color: ${theme.colors.whiteDenim};
    left: 12px;
    top: 3px;
  `}
`;

export const TickKick = styled.div`
  ${({ theme }) => css`
    position: absolute;
    width: 6px;
    height: 2px;
    background-color: ${theme.colors.whiteDenim};
    left: 7px;
    top: 14px;
  `}
`;

export const Square = styled.label`
  ${({ theme }) => css`
    border-radius: 50%;
    position: relative;
    display: block;
    width: ${theme.dimensions.radioBox};
    height: ${theme.dimensions.radioBox};
    transition: all 0.1s ease-out;

    &:hover {
      cursor: pointer;
      box-shadow: 0px 0px 0px 10px ${makeOpaque(theme.colors.blackBetty, 0.1)},
        inset 0 0 0 10px ${makeOpaque(theme.colors.blackBetty, 0.1)};
    }

    &:focus {
      outline: none;
      box-shadow: 0px 0px 0px 10px ${makeOpaque(theme.colors.blackBetty, 0.1)},
        inset 0 0 0 20px ${makeOpaque(theme.colors.blackBetty, 0.1)};
    }

    &::before {
      content: '';
      border: 2px solid rgba(0, 0, 0, 0.75);
      border-radius: 10%;
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

export const Input = styled.input.attrs({ type: 'checkbox' })`
  ${({ theme }) => css`
    position: absolute;
    top: auto;
    overflow: hidden;
    clip: rect(1px, 1px, 1px, 1px);
    width: 1px;
    height: 1px;
    user-select: none;
    white-space: nowrap;

    &:checked + ${Square}:hover {
      box-shadow: 0px 0px 0px 10px ${makeOpaque(theme.colors.primary, 0.1)};
    }

    &:checked + ${Square} ${Tick} {
      display: block;
    }

    &:checked + ${Square}::before {
      background-color: ${theme.colors.primary};
      border-color: ${theme.colors.primary};
    }

    &:disabled + ${Square}:hover {
      box-shadow: none;
      background-color: transparent;
    }

    &:disabled + ${Square} ${Tick} {
      display: none;
    }

    &:disabled + ${Square}::before {
      border-color: ${theme.colors.macyGrey};
      background-color: transparent;
      cursor: not-allowed;
    }
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
  id: string;
  name: string;
  value?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
  'data-qaid'?: string;
  checked?: boolean;
}

const Checkbox: React.SFC<Props> = ({
  children,
  'data-qaid': qaId = '',
  ...props
}) => (
  <>
    <Center>
      <Input type="checkbox" {...props} />
      <Square htmlFor={props.id} data-qaid={`${qaId}-square`}>
        <Tick data-qaid={`${qaId}-tick`}>
          <TickKick />
          <TickStem />
        </Tick>
      </Square>
      {children && <Label data-qaid={`${qaId}-label`}>{children}</Label>}
    </Center>
  </>
);
export default Checkbox;
