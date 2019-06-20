import Theme from '../../typings/theme';
import { css } from '../../lib/styledComponents';

export interface InputProps {
  hasError?: boolean;
}

export const inputBaseStyle = (theme: Theme, props: InputProps) => css`
  width: 100%;
  height: 44px;
  background-color: ${theme.colours.whiteDenim};
  border-radius: ${theme.borderRadius.input};
  border: 1px solid ${theme.colours.macyGrey};
  padding: 0 16px;
  outline: none;
  box-shadow: none;
  transition: ${theme.utils.transition()};

  font-size: ${theme.fontSizes.body2};
  letter-spacing: 0.1px;
  color: ${theme.colours.backToBlack};

  &:hover {
    border-color: ${theme.colours.blueSmoke};
  }

  &:focus {
    border-color: ${theme.colours.backToBlack};
  }

  &:disabled {
    color: ${theme.colours.macyGrey};
    border-color: ${theme.colours.macyGrey};
  }

  ${props.hasError &&
    css`
      border-color: ${theme.colours.redRedWine};
    `}
`;
