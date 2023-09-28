export interface CoinList {
  data: Coin[];
  info: CoinsNum;
}

export interface Coin {
  id: string;
  symbol: string,
  name: string,
  nameid: string,
  rank: number,
  price_usd: string,
  percent_change_24h: string,
  percent_change_1h: string,
  percent_change_7d: string,
  price_btc: string,
  market_cap_usd: string,
  volume24: number,
  volume24a: number,
  csupply: string,
  tsupply: string,
  msupply: string
}

interface CoinsNum {
  coins_num: number;
  time: number;
}

