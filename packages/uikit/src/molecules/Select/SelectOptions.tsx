import React from 'react';
import { KEY_UP, KEY_DOWN, KEY_RETURN } from 'keycode-js';
import styled, { css } from '../../lib/styledComponents';

interface Props {
  children?: any;
  value?: any;
  name?: string;
  disabled?: boolean;
  active?: boolean;
  error?: boolean;
  onClick: (value: any) => void;
}

const OptionStyled = styled.li<Props>`
  ${({ theme }) => css`
    margin-top: 0px;
    list-style: none;
    padding: 10px 24px 10px 24px;
    font-size: ${theme.fontSizes.body2};
    letter-spacing: 0.1px;
    color: ${theme.colours.backToBlack};

    &:hover {
      background-color: ${theme.colours.silverSprings};
      cursor: pointer;
    }

    &:focus {
      background-color: ${theme.colours.silverSprings};
      cursor: pointer;
    }
  `}
`;

const Option: React.SFC<Props> = ({ name, value, active, onClick }) => {
  const onChange = () => {
    if (onClick) {
      onClick(value);
    }
  };

  const onKeyDown = (e: any) => {
    debugger;
    console.log(e);
    const { keyCode, target } = e;

    switch (keyCode) {
      case KEY_DOWN:
        e.preventDefault();
        target.nextElementSibling
          ? target.nextElementSibling.focus()
          : target.parentElement.firstChild.focus();
        break;

      case KEY_UP:
        e.preventDefault();
        target.previousElementSibling
          ? target.previousElementSibling.focus()
          : target.parentElement.lastChild.focus();
        break;

      case KEY_RETURN:
        onChange();
        break;
    }
  };

  return (
    <>
      <OptionStyled onKeyDown={e => onKeyDown(e)} onClick={() => onChange()}>
        {name}
      </OptionStyled>
    </>
  );
};

export default Option;
