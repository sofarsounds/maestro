import React from 'react';

import PageBubble from './PageBubble';
import Pages from './Pages';
import Ellipsis from './Ellipsis';

interface CompactProps {
  currentPage: number;
  totalPages: number;
  onClickPage: (p: number) => void;
  qaId?: string;
}

const Compact: React.SFC<CompactProps> = ({
  currentPage,
  totalPages,
  onClickPage,
  qaId = ''
}) => {
  if (currentPage > totalPages - 4) {
    return (
      <>
        <PageBubble
          page={1}
          isActive={currentPage === 1}
          onClick={() => onClickPage(1)}
          qaId={qaId}
        />
        <Ellipsis />
        <Pages
          displayPages={5}
          currentPage={currentPage}
          enlargement={totalPages - 4}
          onClick={onClickPage}
          qaId={qaId}
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
          qaId={qaId}
        />
        <Ellipsis />
        <PageBubble
          page={totalPages}
          isActive={currentPage === totalPages}
          onClick={() => onClickPage(totalPages)}
          qaId={qaId}
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
        qaId={qaId}
      />
      <Ellipsis />
      <Pages
        displayPages={3}
        currentPage={currentPage}
        enlargement={currentPage - 1}
        onClick={onClickPage}
        qaId={qaId}
      />
      <Ellipsis />
      <PageBubble
        page={totalPages}
        isActive={currentPage === totalPages}
        onClick={() => onClickPage(totalPages)}
        qaId={qaId}
      />
    </>
  );
};

export default Compact;
