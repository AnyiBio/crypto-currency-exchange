import React from 'react';
import {
  RowRendererProps,
  RowComponent,
  CellComponent,
} from 'common/components';
import { Coin } from '../coin-list.vm';
import { PercentageChangeCell } from './percentage-change-cell.component';

type Props = RowRendererProps<Coin>;

export const CoinRowComponent: React.FunctionComponent<Props> = ({
  row,
  onSee,
}) => {

  return (
    <RowComponent onClick={() => onSee(row.id)}>
      <CellComponent>{row.rank}</CellComponent>
      <CellComponent>{row.symbol}</CellComponent>
      <CellComponent>{row.name}</CellComponent>
      <CellComponent>{row.priceUSD}</CellComponent>
      <CellComponent>
        <PercentageChangeCell value={row.percentChange1h} />
      </CellComponent>
      <CellComponent>
        <PercentageChangeCell value={row.percentChange24h} />
      </CellComponent>
      <CellComponent>
        <PercentageChangeCell value={row.percentChange7d} />
      </CellComponent>
    </RowComponent>
  );
};