import React from 'react';
import { AppLayout } from 'layouts';
import { CoinContainer } from 'pods/coin';

export const CoinScene: React.FunctionComponent = () => {
  return (
    <AppLayout>
      <CoinContainer />
    </AppLayout>
  );
};
