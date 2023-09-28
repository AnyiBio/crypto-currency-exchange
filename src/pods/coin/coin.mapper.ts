import { mapToCollection } from 'common/mappers';
import * as apiModel from './api/coin.api-model';
import * as viewModel from './coin.vm';

export const mapCoinFromApiToVm = (
  coin: apiModel.Coin
): viewModel.Coin => {
  return Boolean(coin)
    ? {
      nameId: coin.nameid,
      priceUSD: coin.price_usd,
      percentChange24h: coin.percent_change_24h,
      percentChange1h: coin.percent_change_1h,
      percentChange7d: coin.percent_change_7d,
      marketCapUSD: coin.market_cap_usd,
      ...coin
    }
    : viewModel.createEmptyCoin();
};

export const mapMarketsForCoinFromApiToVm = (
  marketsForCoin: apiModel.MarketsForCoin
): viewModel.MarketsForCoin => {
  return {
      priceUSD: marketsForCoin.price_usd,
      volumeUSD: marketsForCoin.volume_usd,
      ...marketsForCoin
    }
};

export const mapMarketForCoinFromApiToVm = (
  marketsForCoin: apiModel.MarketsForCoin[]
): viewModel.MarketsForCoin[] =>
  mapToCollection(marketsForCoin, p => mapMarketsForCoinFromApiToVm(p));