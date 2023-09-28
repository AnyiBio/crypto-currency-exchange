import React from 'react';
import { AppLayout } from 'layouts';
import { CoinListContainer } from 'pods/coin-list';

export const CoinsScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <CoinListContainer />
    </AppLayout>
  );
};
