import { useRef, useState } from 'react';
import { useDisableScroll, useOutsideClick, useKeyDown } from '../';

interface Props {
  disableScrollWhenOpen?: boolean;
  onChange: (option: any | null) => void;
  defaultOptions?: any;
  getOptionValue?: any;
  getOptionLabel?: any;
  filterable?: boolean;
}

const useSelect = ({
  disableScrollWhenOpen = false,
  onChange,
  defaultOptions,
  filterable
}: Props) => {
  const ref = useRef<any>();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState();

  const [filterValue, setFilterValue] = useState('');

  useDisableScroll(isOpen, disableScrollWhenOpen);

  const onToggle = (open: boolean) => {
    setIsOpen(open);

    if (!open) {
      if (filterValue) {
        setFilterValue('');
      }
    }
  };

  useOutsideClick(ref, () => {
    onToggle(false);
  });

  useKeyDown('Escape', () => {
    onToggle(false);
  });

  const getValueAndLabel = (option: any) => {
    // TODO make dynamic
    return { value: option['id'], label: option['title'] };
  };

  const onSelectOption = (option: any) => {
    setSelectedOption(option);

    if (!option) {
      onChange ? onChange(null) : null;
      onToggle(false);
      return;
    }

    const { value, label } = getValueAndLabel(option);

    onChange ? onChange(option) : null;

    if (filterValue) {
      setFilterValue('');
    }

    onToggle(false);
  };

  const onChangeInput = (e: any) => {
    setFilterValue(e.target.value);

    if (e.target.value === '') {
      setSelectedOption(undefined);
    }
  };

  const labelText = selectedOption
    ? getValueAndLabel(selectedOption).label
    : '';

  const matchingOptions = filterable
    ? defaultOptions.filter((o: any) =>
        o.title.toLowerCase().includes(String(filterValue).toLowerCase())
      )
    : defaultOptions;

  const getDisplayValue = () => {
    if (filterable) {
      if (selectedOption) {
        if (filterValue && filterValue !== labelText) {
          return filterValue;
        }

        return labelText;
      }

      return filterValue;
    }

    return labelText;
  };

  return {
    selectRef: ref,
    isOpen,
    onToggle,
    onOptionClick: onSelectOption,
    inputProps: {
      value: getDisplayValue(),
      onChange: onChangeInput
    },
    options: filterable && filterValue ? matchingOptions : defaultOptions,
    clearSelection: () => {
      setFilterValue('');
      onSelectOption(null);
    }
  };
};

export default useSelect;
