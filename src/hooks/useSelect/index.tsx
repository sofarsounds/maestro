import { useEffect, useRef, useState, useCallback } from 'react';
import { useDisableScroll, useOutsideClick, useKeyDown } from '../';

interface Props<T> {
  onChange: (option: T | null) => void;
  defaultValue?: T | null;
  disableScrollWhenOpen?: boolean;
  getOptionLabel: (opt: T) => string;
  searchable: boolean;
  filterBy?: (option: T, query: string) => boolean;
  defaultOptions: T[];
  value?: T | null;
}

interface ReturnProps<T> {
  selectRef: any;
  isOpen: boolean;
  onToggle: (isOpen: boolean) => void;
  onOptionClick: (option: T) => any;
  options: T[];
  inputProps: {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onClear: () => void;
  };
}

const useSelect = <T extends {}>({
  disableScrollWhenOpen = false,
  defaultValue = null,
  getOptionLabel,
  defaultOptions,
  searchable,
  filterBy,
  value,
  onChange
}: Props<T>): ReturnProps<T> => {
  const ref = useRef<HTMLInputElement>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState(defaultValue);
  const [inputValue, setInputValue] = useState('');

  const onOptionClick = useCallback(
    (option: T | null) => {
      setSelected(option);
      setIsOpen(false);
      setInputValue('');
      onChange(option);
    },
    [onChange]
  );

  useEffect(() => {
    if (value) {
      setSelected(value);
    } else if (value === null && value !== selected) {
      onOptionClick(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, onOptionClick]);

  const toggleSelect = (toOpen: boolean) => {
    if (!toOpen && inputValue) {
      setInputValue('');
    }

    setIsOpen(toOpen);
  };

  useDisableScroll(isOpen, disableScrollWhenOpen);

  useOutsideClick(ref, () => toggleSelect(false));

  useKeyDown('Escape', () => toggleSelect(false));

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;

    if (val === '') {
      setSelected(null);
      setInputValue('');
      onChange(null);
      return;
    }

    setInputValue(val);

    // when user types, force open the select
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
      if (filterBy) {
        return filterBy(o, inputValue);
      }
      const lbl = getOptionLabel(o);
      return lbl.toLowerCase().includes(lower);
    });
  };

  return {
    selectRef: ref,
    isOpen,
    onToggle: toggleSelect,
    onOptionClick,
    options: getOptions(),
    inputProps: {
      onChange: onChangeInput,
      value: getValue(),
      onClear: () => onOptionClick(null)
    }
  };
};

export default useSelect;
