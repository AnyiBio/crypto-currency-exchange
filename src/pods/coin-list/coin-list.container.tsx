import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CoinListComponent } from './coin-list.component';
import { useSnackbarContext } from 'common/components';
import { getCoins } from './api';
import { trackPromise } from 'react-promise-tracker';
import { mapCoinListFromApiToVm } from './coin-list.mapper';
import { Coin } from './coin-list.vm';
import { routes } from 'core/router';
const coinId = '0';

export const CoinListContainer: React.FunctionComponent = () => {
  const [coins, setCoins] = React.useState<Coin[]>([]);
  const { showMessage } = useSnackbarContext();
  const navigate = useNavigate();

  const onLoadCoinList = async () => {
    try {
      const apiCoinList = await trackPromise(getCoins('filter'));
      const viewModelCoinList = mapCoinListFromApiToVm(apiCoinList);
      setCoins(viewModelCoinList);
    } catch (error) {
      error &&
        showMessage('An error happens when it were trying to load the coins', 'error');
    }
  };

  React.useEffect(() => {
    onLoadCoinList();
  }, []);

  const handleSee = (id: string) => {
    navigate(routes.seeCoin(id));
  };

  return (
    <>
      <CoinListComponent
        coinList={coins}
        onSee={handleSee}
      />
    </>
  );
};
