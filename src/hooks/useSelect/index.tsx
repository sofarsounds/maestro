import { useRef, useState } from 'react';
import { useDisableScroll, useOutsideClick, useKeyDown } from '../';

interface Props {
  onChange: (option: any) => void;
  defaultValue: any;
  disableScrollWhenOpen?: boolean;
  getOptionLabel: (opt: any) => string;
  searchable: boolean;
  defaultOptions: any;
}

interface ReturnProps {
  selectRef: any;
  isOpen: boolean;
  onToggle: (isOpen: boolean) => any;
  onOptionClick: (option: any) => any;
  options: any;
  inputProps: {
    value: string;
    onChange: (e: any) => void;
    onClear: () => void;
  };
}

const useSelect = ({
  disableScrollWhenOpen = false,
  defaultValue = null,
  getOptionLabel,
  defaultOptions,
  searchable,
  onChange
}: Props): ReturnProps => {
  const ref = useRef<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState(defaultValue);
  const [inputValue, setInputValue] = useState('');

  const toggleSelect = (toOpen: boolean) => {
    if (!toOpen && inputValue) {
      setInputValue('');
    }

    setIsOpen(toOpen);
  };

  useDisableScroll(isOpen, disableScrollWhenOpen);

  useOutsideClick(ref, () => toggleSelect(false));

  useKeyDown('Escape', () => toggleSelect(false));

  const onOptionClick = (option: any | null) => {
    setSelected(option);
    setIsOpen(false);
    setInputValue('');
    onChange(option);
  };

  const onChangeInput = (e: any) => {
    const val = e.target.value;
    if (val === '') {
      return onOptionClick(null);
    }
    setInputValue(val);

    if (val !== '' && !isOpen) {
      toggleSelect(true);
    }
  };

  const getValue = () => {
    if (!searchable) {
      return selected ? getOptionLabel(selected) : '';
    }

    if (selected) {
      const lbl = getOptionLabel(selected);
      if (inputValue && lbl !== inputValue) {
        return inputValue;
      }
      return getOptionLabel(selected);
    }

    return inputValue;
  };

  const getOptions = () => {
    if (!searchable) {
      return defaultOptions;
    }

    if (!inputValue) {
      return defaultOptions;
    }

    const lower = inputValue.toLowerCase();
    return defaultOptions.filter((o: any) => {
      const lbl = getOptionLabel(o);
      return lbl.toLowerCase().includes(lower);
    });
  };

  return {
    selectRef: ref,
    isOpen,
    onToggle: setIsOpen,
    onOptionClick,
    options: getOptions(),
    inputProps: {
      onChange: onChangeInput,
      value: getValue(),
      onClear: () => {
        onOptionClick(null);
      }
    }
  };
};

export default useSelect;
