import React from 'react';
import {
  TableContainer,
  RowRendererProps,
  useSearchBar,
} from 'common/components';
import { Coin } from './coin-list.vm';
import { AppBar, MenuItem, Rating, Select, Toolbar } from '@mui/material';
import * as classes from './coin-list.styles';
import { CoinRowComponent } from './components/coin-row.component';

interface Props {
  coinList: Coin[];
  onSee: (id: string) => void;
}

export const CoinListComponent: React.FunctionComponent<Props> = ({
  coinList,
  onSee
}) => {

  const { filteredList, onSearch, search } = useSearchBar(coinList, [
    'name',
  ]);

  return (
    <>
      <TableContainer
        columns={[
          'Rank',
          'Symbol',
          'Name',
          'Price',
          '1h %',
          '24 %',
          '7d %',
        ]}
      onSee={onSee}
      rows={filteredList}
      rowRenderer={(rowProps: RowRendererProps<Coin>) => (
        <CoinRowComponent {...rowProps} />
      )}
      labels={{
        searchPlaceholder: 'Search crypto',
        closeButton: 'Cancelar',
        acceptButton: 'Aceptar',
      }}
      enableSearch={true}
      search={search}
      onSearch={onSearch}
      enablePagination={true}
      pageSize={25}
    />
    </>
  );
};


