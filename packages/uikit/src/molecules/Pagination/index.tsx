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
}

interface PaginationState {
  currentPage: number;
  totalPages: number;
}

const MAX_PAGES = 5;

export default class Pagination extends React.Component<
  PaginationProps,
  PaginationState
> {
  public readonly state: PaginationState = {
    currentPage: 1,
    totalPages: 0
  };

  public constructor(props: PaginationProps) {
    super(props);

    const perPage = props.perPage || 8;
    const totalPages = Math.ceil(props.totalRecords / perPage);

    this.state = {
      currentPage: props.currentPage || 1,
      totalPages
    };
  }

  public handlePageChange = (page: number) => {
    this.setState({ currentPage: page });
    this.props.onPageChange(page);
  };

  public render() {
    const { totalRecords } = this.props;
    const { currentPage, totalPages } = this.state;

    if (!totalRecords) {
      return null;
    }

    if (totalPages <= 1) {
      return null;
    }

    return (
      <PaginationWrapper>
        <ArrowLeft
          disabled={currentPage <= 1}
          onClick={() => this.handlePageChange(currentPage - 1)}
        />

        {totalPages <= MAX_PAGES ? (
          <Pages
            displayPages={totalPages}
            currentPage={currentPage}
            onClick={this.handlePageChange}
          />
        ) : (
          <CompactPages
            currentPage={currentPage}
            totalPages={totalPages}
            onClickPage={this.handlePageChange}
          />
        )}

        <ArrowRight
          disabled={currentPage >= totalPages}
          onClick={() => this.handlePageChange(currentPage + 1)}
        />
      </PaginationWrapper>
    );
  }
}
