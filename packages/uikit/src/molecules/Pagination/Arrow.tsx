import React from 'react';

import theme from '../../theme';
import Badge from '../../atoms/Badge';
import Icon from '../../atoms/Icon';

interface ArrowProps {
  onClick: () => void;
  disabled?: boolean;
}

const renderArrow = (disabled: boolean = false, onClick: any, icon: string) => (
  <Badge as="button" disabled={disabled} clickable onClick={onClick}>
    <Icon colour={disabled ? theme.colours.blueSmoke : undefined} name={icon} />
  </Badge>
);

export const ArrowLeft: React.SFC<ArrowProps> = ({ disabled, onClick }) =>
  renderArrow(disabled, onClick, 'chevronLeft');

export const ArrowRight: React.SFC<ArrowProps> = ({ disabled, onClick }) =>
  renderArrow(disabled, onClick, 'chevronRight');
