import React from 'react';
import { AppBar } from '@mui/material';
import {
  TabComponent,
  TabListComponent,
  TabPanelComponent,
} from 'common/components';
import { Coin } from './coin.vm';
import { CardDataCoinComponent } from './components';
import { LineChartComponent } from 'common/components/line-chart';
import * as classes from './coin.styles';

interface Props {
  coin: Coin;
}

export const CoinComponent: React.FunctionComponent<Props> = ({
  coin,
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
        <LineChartComponent />
      </TabPanelComponent>
    </>
  );
};
