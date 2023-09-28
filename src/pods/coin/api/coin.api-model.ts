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

export const createEmptyCoin = (): Coin => ({
  id: "0",
  symbol: "",
  name: "",
  nameid: "",
  rank: 0,
  price_usd: "",
  percent_change_24h: "",
  percent_change_1h: "",
  percent_change_7d: "",
  price_btc: "",
  market_cap_usd: "",
  volume24: 0,
  volume24a: 0,
  csupply: "",
  tsupply: "",
  msupply: ""
});
