import React from 'react';

import PageBubble from './PageBubble';

interface PagesProps {
  displayPages: number;
  currentPage: number;
  enlargement?: number;
  onClick: (p: number) => void;
}

const Pages: React.SFC<PagesProps> = ({
  displayPages,
  currentPage,
  enlargement = 1,
  onClick
}) => (
  <>
    {[...Array(displayPages)].map((_, page: number) => (
      <PageBubble
        key={page + enlargement}
        page={page + enlargement}
        isActive={currentPage === page + enlargement}
        onClick={() => onClick(page + enlargement)}
      />
    ))}
  </>
);

export default Pages;
