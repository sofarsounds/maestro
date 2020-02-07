import { useRef, useState } from 'react';
import { useDisableScroll, useOutsideClick, useKeyDown } from '../';

interface Props {
  disableScrollWhenOpen?: boolean;
  handleOptionClick?: (value: any, option: any) => void;
}

interface ReturnProps {
  selectRef: any;
  isOpen: boolean;
  labelText: string;
  onToggle: (o: boolean) => any;
  onOptionClick: (v: any, l: any, o: any) => any;
}

const useSelect = ({
  disableScrollWhenOpen = false,
  handleOptionClick
}: Props): ReturnProps => {
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

  const onOptionClick = (value: any, label: any, option: any) => {
    setLabelText(label);
    setIsOpen(false);
    handleOptionClick ? handleOptionClick(value, option) : null;
  };

  return {
    selectRef: ref,
    isOpen,
    labelText,
    onToggle: setIsOpen,
    onOptionClick
  };
};

export default useSelect;
