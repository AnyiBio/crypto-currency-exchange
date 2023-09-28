import React from 'react';
import { CoinComponent } from './coin.component';
import { useParams } from 'react-router-dom';
import { useSnackbarContext } from 'common/components';
import { getCoinById } from './api';
import { trackPromise } from 'react-promise-tracker';
import { mapCoinFromApiToVm } from './coin.mapper';
import { Coin, createEmptyCoin } from './coin.vm';
import { isSeeModeHelper } from 'common/helpers';

export const CoinContainer: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [coin, setCoin] = React.useState<Coin>(createEmptyCoin());
  const { showMessage } = useSnackbarContext();
  const [isSeeMode, setIsSeeMode] = React.useState<boolean>(false);

  const onLoadCoin = async () => {
    try {
      const apiCoin = await trackPromise(getCoinById(id));
      const viewModelCoin = mapCoinFromApiToVm(apiCoin);
      setCoin(viewModelCoin);
    } catch (error) {
      error &&
        showMessage('An error occurred while loading the currency', 'error');
    }
  };

  React.useEffect(() => {
    const isSeeMode = isSeeModeHelper(id);
    setIsSeeMode(isSeeMode);
    if (isSeeMode) {
      onLoadCoin();
    }
  }, []);

  return (
    <CoinComponent
      coin={coin}
    />
  );
};
