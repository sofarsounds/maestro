import Theme from '../../typings/theme';
import { css } from '../../lib/styledComponents';

export interface InputProps {
  theme: Theme;
  hasError?: boolean;
}

export default (props: InputProps) => css`
  width: 100%;
  height: 44px;
  background-color: ${props.theme.colours.whiteDenim};
  border-radius: ${props.theme.borderRadius.input};
  border: 1px solid ${props.theme.colours.macyGrey};
  padding: 0 16px;
  outline: none;
  box-shadow: none;
  transition: ${props.theme.utils.transition()};

  font-size: ${props.theme.fontSizes.body2};
  letter-spacing: 0.1px;
  color: ${props.theme.colours.backToBlack};

  &:hover {
    border-color: ${props.theme.colours.blueSmoke};
  }

  &:focus {
    border-color: ${props.theme.colours.backToBlack};
  }

  &:disabled {
    color: ${props.theme.colours.macyGrey};
    border-color: ${props.theme.colours.macyGrey};
  }

  ${props.hasError &&
    css`
      border-color: ${props.theme.colours.redRedWine};
    `}
`;
