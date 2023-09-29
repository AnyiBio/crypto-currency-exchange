import { CoinList } from './coin-list.api-model';

export const getCoins = async (): Promise<CoinList> => 
  fetch(process.env.REACT_APP_API_COINS).then((response) =>
  response.json()
); 
