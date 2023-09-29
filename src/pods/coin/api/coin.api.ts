import { Coin, MarketsForCoin } from './coin.api-model';

export const getCoinById = async (id: string): Promise<Coin[]> => 
  fetch(`${process.env.REACT_APP_API_COIN}${id}`).then((response) =>
  response.json()
);

export const getMarketsForCoin = async (id: string): Promise<MarketsForCoin[]> => 
  fetch(`${process.env.REACT_APP_API_MARKETS_COIN}${id}`).then((response) =>
  response.json()
);
