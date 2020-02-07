import React from 'react';
import Menu from '../../atoms/Menu';
import MenuItem from '../../atoms/MenuItem';
import { StickyContainerV2, PortalComponent } from '../../util/index';

interface Props {
  innerRef: React.RefObject<any>;
  isOpen: boolean;
  options: any[];
  onOptionClick: (val: any, label: any, option: any) => any;
  qaId?: string;

  getOptionValue?: (opt: any) => any;
  getOptionLabel?: (opt: any) => any;
  renderOption?: (opt: any) => React.ReactNode;
}

const Options: React.SFC<Props> = ({
  innerRef,
  isOpen,
  qaId,
  getOptionLabel,
  getOptionValue,
  renderOption,
  options,
  onOptionClick
}) => {
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
            const val = getOptionValue ? getOptionValue(option) : option.id;
            const label = getOptionLabel
              ? getOptionLabel(option)
              : option.title;
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
