import React from 'react';
import styled from '../../lib/styledComponents';

import CompactPages from './Compact';
import Pages from './Pages';
import { ArrowLeft, ArrowRight } from './Arrow';

const PaginationWrapper = styled.div`
  display: flex;
`;

export interface PaginationProps {
  currentPage?: number;
  onPageChange: (p: number) => void;
  totalRecords: number;
  perPage?: number;
  'data-qaid'?: string;
  id?: string;
}

const MAX_PAGES = 5;
const PER_PAGE = 8;

export default class Pagination extends React.Component<PaginationProps> {
  public static DEFAULT_PER_PAGE = PER_PAGE;

  public handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
    this.props.onPageChange(page);
  };

  public render() {
    const {
      currentPage = 1,
      totalRecords,
      'data-qaid': qaId = '',
      id
    } = this.props;

    const perPage = this.props.perPage || PER_PAGE;
    const totalPages = Math.ceil(totalRecords / perPage);

    if (!totalRecords) {
      return null;
    }

    if (totalPages <= 1) {
      return null;
    }

    return (
      <PaginationWrapper id={id} data-qaid={qaId}>
        <ArrowLeft
          disabled={currentPage <= 1}
          onClick={() => this.handlePageChange(currentPage - 1)}
          data-qaid={`${qaId}-prev`}
        />

        {totalPages <= MAX_PAGES ? (
          <Pages
            displayPages={totalPages}
            currentPage={currentPage}
            onClick={this.handlePageChange}
            qaId={qaId}
          />
        ) : (
          <CompactPages
            currentPage={currentPage}
            totalPages={totalPages}
            onClickPage={this.handlePageChange}
            qaId={qaId}
          />
        )}

        <ArrowRight
          disabled={currentPage >= totalPages}
          onClick={() => this.handlePageChange(currentPage + 1)}
          data-qaid={`${qaId}-next`}
        />
      </PaginationWrapper>
    );
  }
}
