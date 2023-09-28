import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/coin-list.api-model';
import * as viewModel from './coin-list.vm';

export const mapCoinFromApiToVm = (
  coin: apiModel.Coin
): viewModel.Coin => {
  return {
      nameId: coin.nameid,
      priceUSD: coin.price_usd,
      percentChange24h: coin.percent_change_24h,
      percentChange1h: coin.percent_change_1h,
      percentChange7d: coin.percent_change_7d,
      marketCapUSD: coin.market_cap_usd,
      ...coin
    }
};

export const mapCoinListFromApiToVm = (
  coinList: apiModel.CoinList
): viewModel.Coin[] =>
  mapToCollection(coinList?.data, p => mapCoinFromApiToVm(p));
