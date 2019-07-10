import React from 'react';

import Badge from '../../atoms/Badge';

interface BubbleProps {
  isActive: boolean;
  page: number;
  onClick: () => void;
  qaId?: string;
}

const PageBubble: React.SFC<BubbleProps> = ({
  isActive,
  page,
  onClick,
  qaId = ''
}) =>
  isActive ? (
    <Badge colour="primary">{page}</Badge>
  ) : (
    <Badge
      as="button"
      clickable
      onClick={onClick}
      data-qaid={`${qaId}-page-${page}`}
    >
      {page}
    </Badge>
  );

export default PageBubble;
