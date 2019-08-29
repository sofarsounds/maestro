import React, { useState, useRef } from 'react';
import Input from './Input';
import Menu from './Menu';
import { StickyContainer, PortalComponent } from '../../util/index';
import { useDisableScroll, useOutsideClick, useKeyDown } from '../../hooks';

interface SelectProps {
  placeholder: string;
  children?: any;
  handleOptionClick?: (value: any) => void;
  readonly?: boolean;
  positionFixed?: boolean;
  disableScrollWhenOpen?: boolean;
  hasError?: boolean;
  name?: string;
  id?: string;
}

const Select: React.SFC<SelectProps> = ({
  placeholder,
  children,
  readonly,
  handleOptionClick,
  positionFixed,
  disableScrollWhenOpen = false,
  hasError,
  name,
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<any>();
  const [value, setValue] = useState<string>('');

  useDisableScroll(isOpen, disableScrollWhenOpen);

  useOutsideClick(ref, () => {
    setIsOpen(false);
  });

  useKeyDown('Escape', () => {
    setIsOpen(false);
  });

  const optionClick = (value: any) => {
    setValue(value);
    setIsOpen(false);
    handleOptionClick ? handleOptionClick(value) : null;
  };

  return (
    <>
      <Input
        id={id}
        readonly={readonly}
        innerRef={ref}
        isOpen={isOpen}
        value={value}
        placeholder={placeholder}
        toggleSelect={() => setIsOpen(!isOpen)}
        hasError={hasError}
        name={name}
      />
      {isOpen && (
        <PortalComponent dom={document.body}>
          <StickyContainer
            positionFixed={positionFixed}
            stickToEl={ref.current}
          >
            <Menu isSelect depth={3}>
              {children({ optionClick })}
            </Menu>
          </StickyContainer>
        </PortalComponent>
      )}
    </>
  );
};

export { default as Option } from './Option';
export { default as Menu } from './Menu';

export default Select;
