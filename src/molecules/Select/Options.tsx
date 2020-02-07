import React from 'react';
import Menu from '../../atoms/Menu';
import MenuItem from '../../atoms/MenuItem';
import { StickyContainerV2, PortalComponent } from '../../util/index';

// interface DefaultOption {
//   id: number;
//   title: string;
// }

interface Props<T> {
  innerRef: React.RefObject<any>;
  isOpen: boolean;
  options: T[];
  onOptionClick: (val: any, label: any, option: any) => any;
  qaId?: string;

  getOptionValue?: (opt: T) => string | number;
  getOptionLabel?: (opt: T) => string | number;
  renderOption?: (props: { option: T; onClick: any }) => React.ReactNode;
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
      <StickyContainerV2
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
          {options.map((option, key) => {
            const val = getOptionValue ? getOptionValue(option) : option['id'];
            const label = getOptionLabel
              ? getOptionLabel(option)
              : option['title'];
            const onClick = () => onOptionClick(val, label, option);

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
      </StickyContainerV2>
    </PortalComponent>
  );
};

export default Options;
