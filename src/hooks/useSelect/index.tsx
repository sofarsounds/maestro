import { useRef, useState } from 'react';
import { useDisableScroll, useOutsideClick, useKeyDown } from '../';

interface Props {
  onChange: (option: any) => void;
  defaultValue: any;
  disableScrollWhenOpen?: boolean;
  getOptionLabel: (opt: any) => string;
}

interface ReturnProps {
  selectRef: any;
  isOpen: boolean;
  labelText: string;
  onToggle: (isOpen: boolean) => any;
  onOptionClick: (option: any) => any;
}

const useSelect = ({
  disableScrollWhenOpen = false,
  defaultValue = null,
  getOptionLabel,
  onChange
}: Props): ReturnProps => {
  const ref = useRef<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState(defaultValue);

  useDisableScroll(isOpen, disableScrollWhenOpen);

  useOutsideClick(ref, () => setIsOpen(false));

  useKeyDown('Escape', () => setIsOpen(false));

  const onOptionClick = (option: any) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option);
  };

  return {
    selectRef: ref,
    isOpen,
    labelText: selected ? getOptionLabel(selected) : '',
    onToggle: setIsOpen,
    onOptionClick
  };
};

export default useSelect;
