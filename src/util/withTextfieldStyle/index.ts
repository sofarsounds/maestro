import { InputProps } from '../../typings/input';
import { css } from '../../lib/styledComponents';

export default (props: InputProps) => css`
  width: 100%;
  height: ${props.theme.dimensions.inputHeight};
  background-color: ${props.theme.colors.whiteDenim};
  border-radius: ${props.theme.borderRadius.input};
  border: 1px solid ${props.theme.colors.macyGrey};
  padding: 0 ${props.theme.ruler[4]}px;
  outline: none;
  box-shadow: none;
  transition: ${props.theme.utils.transition()};

  font-size: ${props.theme.fontSizes.body2};
  letter-spacing: 0.1px;
  color: ${props.theme.colors.backToBlack};

  &:hover {
    border-color: ${props.theme.colors.blueSmoke};
  }

  &:focus {
    border-color: ${props.theme.colors.backToBlack};
  }

  &:disabled {
    color: ${props.theme.colors.macyGrey};
    border-color: ${props.theme.colors.macyGrey};
  }

  ${props.hasError &&
    css`
      border-color: ${props.theme.colors.redRedWine};
    `}
`;
