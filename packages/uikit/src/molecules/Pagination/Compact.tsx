import React from 'react';

import PageBubble from './PageBubble';
import Pages from './Pages';
import Ellipsis from './Ellipsis';

interface CompactProps {
  currentPage: number;
  totalPages: number;
  onClickPage: (p: number) => void;
}

const Compact: React.SFC<CompactProps> = ({
  currentPage,
  totalPages,
  onClickPage
}) => {
  if (currentPage > totalPages - 4) {
    return (
      <>
        <PageBubble
          page={1}
          isActive={currentPage === 1}
          onClick={() => onClickPage(1)}
        />
        <Ellipsis />
        <Pages
          displayPages={5}
          currentPage={currentPage}
          enlargement={totalPages - 4}
          onClick={onClickPage}
        />
      </>
    );
  }

  if (currentPage < 5) {
    return (
      <>
        <Pages
          displayPages={5}
          currentPage={currentPage}
          onClick={onClickPage}
        />
        <Ellipsis />
        <PageBubble
          page={totalPages}
          isActive={currentPage === totalPages}
          onClick={() => onClickPage(totalPages)}
        />
      </>
    );
  }

  return (
    <>
      <PageBubble
        page={1}
        isActive={currentPage === 1}
        onClick={() => onClickPage(1)}
      />
      <Ellipsis />
      <Pages
        displayPages={3}
        currentPage={currentPage}
        enlargement={currentPage - 1}
        onClick={onClickPage}
      />
      <Ellipsis />
      <PageBubble
        page={totalPages}
        isActive={currentPage === totalPages}
        onClick={() => onClickPage(totalPages)}
      />
    </>
  );
};

export default Compact;
