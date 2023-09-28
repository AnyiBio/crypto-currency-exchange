import React from 'react';
import { TableProps, HeaderGroup, Row } from 'react-table';
import {
  Paper,
  TableContainer,
  Table,
  Button,
  Typography,
} from '@mui/material';
import { SearchBarComponent } from '../search-bar';
import { PaginationComponent } from '../pagination';
import { ConfirmationDialogComponent } from '../confirmation-dialog';
import { HeaderComponent, BodyComponent } from './components';
import { RowRendererProps, LabelProps } from './table.vm';
import * as classes from './table.styles';

interface Props<T extends object = {}> {
  tableProps: TableProps;
  headerGroups: HeaderGroup<T>[];
  rows: Row<T>[];
  prepareRow: (row: Row<T>) => void;
  rowRenderer: (props: RowRendererProps<T>) => React.ReactNode;
  labels: LabelProps;
  enableSearch: boolean;
  search?: string;
  onSearch?: (search: string) => void;
  enablePagination: boolean;
  pageIndex?: number;
  pageCount?: number;
  goToPage?: (pageIndex: number) => void;
  itemToDeleteName?: string;
  isOpenConfirmation?: boolean;
  onCloseConfirmation?: () => void;
  className?: string;
}

export const TableComponent: React.FunctionComponent<Props> = (props) => {
  const {
    tableProps,
    headerGroups,
    rows,
    prepareRow,
    rowRenderer,
    enableSearch,
    search,
    onSearch,
    enablePagination,
    pageIndex,
    pageCount,
    goToPage,
    labels,
    className,
  } = props;

  return (
    <div className={className}>
      <div className={classes.root}>
        {enableSearch && (
          <SearchBarComponent
            className={classes.search}
            search={search}
            onSearch={onSearch}
            labels={{ placeholder: labels.searchPlaceholder }}
          />
        )}
        <TableContainer className={classes.table} component={Paper}>
          <Table {...tableProps}>
            <HeaderComponent headerGroups={headerGroups} />
            <BodyComponent
              rows={rows}
              prepareRow={prepareRow}
              rowRenderer={rowRenderer}
            />
          </Table>
          {enablePagination && (
            <PaginationComponent
              className={classes.pagination}
              pageIndex={pageIndex}
              pageCount={pageCount}
              onChange={goToPage}
            />
          )}
        </TableContainer>
      </div>
    </div>
  );
};
