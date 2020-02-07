import React, { useState, useRef } from 'react';
import Input from './Input';
import Menu from '../../atoms/Menu';
import MenuItem from '../../atoms/MenuItem';
import { StickyContainerV2, PortalComponent } from '../../util/index';
import { useDisableScroll, useOutsideClick, useKeyDown } from '../../hooks';

interface SelectProps {
  options: any[];
  placeholder: string;

  id?: string;
  invertColor?: boolean;
  handleOptionClick?: (value: any, option: any) => void;
  disableScrollWhenOpen?: boolean;
  hasError?: boolean;
  name?: string;
  'data-qaid'?: string;
  renderLeftIcon?: (props: any) => React.ReactNode;
  getOptionValue?: (opt: any) => any;
  getOptionLabel?: (opt: any) => any;
  renderOption?: (opt: any) => React.ReactNode;
}

const Select: React.SFC<SelectProps> = ({
  options,
  placeholder,
  invertColor,
  handleOptionClick,
  disableScrollWhenOpen = false,
  hasError,
  name,
  id,
  renderLeftIcon,
  getOptionLabel,
  getOptionValue,
  renderOption,
  'data-qaid': qaId
}) => {
  const ref = useRef<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [labelText, setLabelText] = useState<string>('');

  useDisableScroll(isOpen, disableScrollWhenOpen);

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  useKeyDown('Escape', () => {
    setIsOpen(false);
  });

  const optionClick = (value: any, label: any, option: any) => {
    setLabelText(label);
    setIsOpen(false);
    handleOptionClick ? handleOptionClick(value, option) : null;
  };

  return (
    <>
      <Input
        innerRef={ref}
        isOpen={isOpen}
        invertColor={invertColor}
        inputProps={{
          id,
          readOnly: true,
          placeholder,
          value: labelText,
          name
        }}
        onToggle={() => setIsOpen(!isOpen)}
        renderLeftIcon={renderLeftIcon}
        hasError={hasError}
        data-qaid={qaId}
      />

      {isOpen && (
        <PortalComponent dom={document.body}>
          <StickyContainerV2
            anchorEl={ref}
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
            <Menu bordered>
              {options.map((option, key) => {
                const val = getOptionValue ? getOptionValue(option) : option.id;
                const label = getOptionLabel
                  ? getOptionLabel(option)
                  : option.title;
                const onClick = () => optionClick(val, label, option);

                if (renderOption) {
                  return renderOption({ key, option, onClick });
                }

                return (
                  <MenuItem key={key} onClick={onClick}>
                    {label}
                  </MenuItem>
                );
              })}
            </Menu>
          </StickyContainerV2>
        </PortalComponent>
      )}
    </>
  );
};

export default Select;
