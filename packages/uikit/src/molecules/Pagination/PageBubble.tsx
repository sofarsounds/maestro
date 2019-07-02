import React from 'react';

import Badge from '../../atoms/Badge';

interface BubbleProps {
  isActive: boolean;
  page: number;
  onClick: () => void;
}

const PageBubble: React.SFC<BubbleProps> = ({ isActive, page, onClick }) =>
  isActive ? (
    <Badge colour="primary">{page}</Badge>
  ) : (
    <Badge as="button" clickable onClick={onClick}>
      {page}
    </Badge>
  );

export default PageBubble;
