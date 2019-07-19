import React, { useState } from 'react';
import Item from './Item';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import styled, { css } from '../../lib/styledComponents';

const Wrapper = styled.span`
  cursor: pointer;
  svg > path {
    color: #fff;
  }
`;

interface SubItemsProps {
  open: boolean;
}

export const SubItems = styled.div<SubItemsProps>`
  ${({ open }) => css`
    display: ${open ? 'block' : 'none'};
  `}
  position: absolute;
  font-size: 14px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-radius: 4px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  background: #fff;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-top: 10px;
  width: 130px;
  min-width: 130px;
  &::after {
    border-left: 10px solid transparent;
    border-bottom: 10px solid #fff;
    top: -4px;
    content: '';
    position: absolute;
    right: 65px;
    transform: rotateZ(224deg);
  }
  ${({ theme }) => css`
    background-color: ${theme.colours.whiteDenim};
  `}
`;

export const SubItem = styled.a`
  display: block;
  padding: 8px 20px;
`;

interface DropdownProps {
  children?: any;
  title: string;
}

const DropdownItem: React.SFC<DropdownProps> = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Item
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {title}
      </Item>
      <FontAwesomeIcon icon={faAngleDown} color="#FFF" size="sm" />
      <SubItems open={isOpen}>{children}</SubItems>
    </Wrapper>
  );
};

export default DropdownItem;
