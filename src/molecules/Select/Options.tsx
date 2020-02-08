import React from 'react';
import Menu from '../../atoms/Menu';
import MenuItem from '../../atoms/MenuItem';
import { StickyContainer, PortalComponent } from '../../util/index';

export interface OptionsListProps<T> {
  getOptionLabel: (opt: T) => string;
  renderOption?: (option: T, props: any) => React.ReactNode;
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
          {options.length === 0 && (
            <MenuItem disabled data-qaid={`${qaId}-empty`}>
              No options...
            </MenuItem>
          )}

          {options.map((option, key) => {
            const label = getOptionLabel(option);
            const onClick = () => onOptionClick(option);

            if (renderOption) {
              return renderOption(option, { onClick });
            }

            return (
              <MenuItem
                key={key}
                data-qaid={`${qaId}-option`}
                tabIndex={key}
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
