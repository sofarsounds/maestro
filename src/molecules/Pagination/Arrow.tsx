import React from 'react';

import Badge from '../../atoms/Badge';
import Icon from '../../atoms/Icon';

interface ArrowProps {
  onClick: () => void;
  disabled?: boolean;
  'data-qaid'?: string;
}

const renderArrow = (
  disabled: boolean = false,
  onClick: any,
  icon: string,
  qaId: string = ''
) => (
  <Badge
    as="button"
    disabled={disabled}
    clickable
    onClick={onClick}
    data-qaid={qaId}
  >
    <Icon color={disabled ? 'blueSmoke' : undefined} name={icon} />
  </Badge>
);

export const ArrowLeft: React.SFC<ArrowProps> = ({
  disabled,
  onClick,
  'data-qaid': qaId
}) => renderArrow(disabled, onClick, 'chevronLeft', qaId);

export const ArrowRight: React.SFC<ArrowProps> = ({
  disabled,
  onClick,
  'data-qaid': qaId
}) => renderArrow(disabled, onClick, 'chevronRight', qaId);
