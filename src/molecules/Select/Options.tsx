import React from 'react';
import Menu from '../../atoms/Menu';
import MenuItem from '../../atoms/MenuItem';
import { StickyContainer, PortalComponent } from '../../util/index';

export interface OptionsListProps<T> {
  getOptionValue?: (opt: T) => string | number;
  getOptionLabel?: (opt: T) => string | number;
  renderOption?: (props: { option: T; onClick: any }) => React.ReactNode;
}

interface Props<T> extends OptionsListProps<T> {
  qaId?: string;
  options: T[];
  isOpen: boolean;
  innerRef: React.RefObject<any>;
  onOptionClick: (option: T) => void;
}

const Options = <T extends {}>({
  innerRef,
  isOpen,
  qaId,
  getOptionLabel,
  getOptionValue,
  renderOption,
  options,
  onOptionClick
}: Props<T>) => {
  if (!isOpen) {
    return null;
  }

  return (
    <PortalComponent dom={document.body}>
      <StickyContainer
        anchorEl={innerRef}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        width="auto"
      >
        <Menu bordered data-qaid={`${qaId}-menu`}>
          {options.length === 0 && <MenuItem disabled>No Options...</MenuItem>}

          {options.map((option, key) => {
            const val = getOptionValue ? getOptionValue(option) : option['id'];
            const label = getOptionLabel
              ? getOptionLabel(option)
              : option['title'];
            const onClick = () => onOptionClick(option);

            if (renderOption) {
              return renderOption({ option, onClick });
            }

            return (
              <MenuItem
                data-qaid={`${qaId}-option`}
                key={key}
                onClick={onClick}
              >
                {label}
              </MenuItem>
            );
          })}
        </Menu>
      </StickyContainer>
    </PortalComponent>
  );
};

export default Options;
