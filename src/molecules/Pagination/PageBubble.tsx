import React from 'react';
import styled, { css } from '../../lib/styledComponents';

import Badge from '../../atoms/Badge';

interface BubbleProps {
  isActive: boolean;
  page: number;
  onClick: () => void;
  qaId?: string;
}

const BadgeWithSpacing = styled(Badge)`
  ${({ theme }) => css`
    margin: 0 ${theme.ruler[1]}px;
  `}
`;

const PageBubble: React.SFC<BubbleProps> = ({
  isActive,
  page,
  onClick,
  qaId = ''
}) =>
  isActive ? (
    <BadgeWithSpacing color="primary">{page}</BadgeWithSpacing>
  ) : (
    <BadgeWithSpacing
      as="button"
      clickable
      onClick={onClick}
      data-qaid={`${qaId}-page-${page}`}
    >
      {page}
    </BadgeWithSpacing>
  );

export default PageBubble;
