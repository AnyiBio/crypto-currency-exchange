import React from 'react';
import { AppBar } from '@mui/material';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { Coin, MarketsForCoin } from './coin.vm';
import { CardDataCoinComponent } from './components';
import { BarChart } from 'common/components/bar-chart';
import { CHART_OPTIONS } from './coin.constants';

interface Props {
  coin: Coin;
  marketsForCoin: MarketsForCoin[]
}

export const CoinComponent: React.FunctionComponent<Props> = ({
  coin,
  marketsForCoin
}) => {
  const [tab, setTab] = React.useState(0);
  return (
    <>
      <AppBar position="static">
        <TabListComponent value={tab} onChange={setTab}>
          <TabComponent label="Price" />
          <TabComponent label="Market Cap"/>
        </TabListComponent>
      </AppBar>
      <TabPanelComponent value={tab} index={0}>
        <CardDataCoinComponent {...coin}/>
      </TabPanelComponent>
      <TabPanelComponent value={tab} index={1}>
        <BarChart 
          data={marketsForCoin}
          configuration={CHART_OPTIONS[0]}
        />
        <BarChart
          data={marketsForCoin}
          configuration={CHART_OPTIONS[1]}
        />
      </TabPanelComponent>
    </>
  );
};
