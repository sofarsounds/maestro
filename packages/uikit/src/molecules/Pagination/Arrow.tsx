import React from 'react';

import theme from '../../theme';
import Badge from '../../atoms/Badge';
import Icon from '../../atoms/Icon';

interface ArrowProps {
  onClick: () => void;
  disabled?: boolean;
}

export const ArrowLeft: React.SFC<ArrowProps> = ({ disabled, onClick }) =>
  disabled ? (
    <Badge>
      <Icon colour={theme.colours.blueSmoke} name="chevronLeft" />
    </Badge>
  ) : (
    <Badge clickable onClick={onClick}>
      <Icon name="chevronLeft" />
    </Badge>
  );

export const ArrowRight: React.SFC<ArrowProps> = ({ disabled, onClick }) =>
  disabled ? (
    <Badge>
      <Icon colour={theme.colours.blueSmoke} name="chevronRight" />
    </Badge>
  ) : (
    <Badge clickable onClick={onClick}>
      <Icon name="chevronRight" />
    </Badge>
  );
