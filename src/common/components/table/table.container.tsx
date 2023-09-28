import React from 'react';
import {
  useTable,
  usePagination,
  TableInstance,
  UsePaginationInstanceProps,
} from 'react-table';
import { useConfirmationDialog } from '../confirmation-dialog';
import {
  RowRendererProps,
  LabelProps,
  createEmptyLabelProps,
} from './table.vm';
import { TableComponent } from './table.component';
import { mapColumnListFromStringToColumn } from './table.mappers';

type TableProps = TableInstance & UsePaginationInstanceProps<{}>;

interface Props<T = {}> {
  columns: string[];
  rows: T[];
  rowRenderer: (props: RowRendererProps<T>) => React.ReactNode;
  enableSearch?: boolean;
  search?: string;
  onSearch?: (search: string) => void;
  enablePagination?: boolean;
  pageSize?: number;
  onSee?: (id: string) => void;
  labels?: LabelProps;
  className?: string;
}

export const TableContainer: React.FunctionComponent<Props> = props => {
  const { className } = props;

  const labels = { ...createEmptyLabelProps(), ...props.labels };

  const columns = React.useMemo(
    () => mapColumnListFromStringToColumn(props.columns),
    [props.columns]
  );
  const data = React.useMemo(() => props.rows, [props.rows]);

  const {
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    gotoPage,
    pageOptions,
    state,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageSize: props.pageSize } as any,
    },
    usePagination
  ) as TableProps;
  const { pageIndex } = state as any;

  const {
    isOpen,
    itemToDelete,
    onClose,
  } = useConfirmationDialog();

  return (
    <TableComponent
      className={className}
      tableProps={{ ...getTableProps() }}
      headerGroups={headerGroups}
      rows={props.enablePagination ? page : rows}
      prepareRow={prepareRow}
      rowRenderer={rowProps =>
        props.rowRenderer({
          ...rowProps,
          onSee: props.onSee,
        })
      }
      labels={labels}
      enableSearch={props.enableSearch}
      search={props.search}
      onSearch={props.onSearch}
      enablePagination={Boolean(
        props.enablePagination && pageOptions.length > 1
      )}
      pageIndex={pageIndex}
      pageCount={pageOptions.length}
      goToPage={gotoPage}
      isOpenConfirmation={isOpen}
      onCloseConfirmation={onClose}
      itemToDeleteName={itemToDelete.name}
    />
  );
};

TableContainer.defaultProps = {
  enablePagination: false,
  labels: createEmptyLabelProps(),
};
