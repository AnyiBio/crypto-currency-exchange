export interface Coin {
  id: string;
  symbol: string,
  name: string,
  nameId: string,
  rank: number,
  priceUSD: string,
  percentChange24h: string,
  percentChange1h: string,
  percentChange7d: string,
  marketCapUSD: string,
}

export const createEmptyCoin = (): Coin => ({
  id: '1',
  symbol: '',
  name: '',
  nameId: '',
  rank: 0,
  priceUSD: '',
  percentChange24h: '',
  percentChange1h: '',
  percentChange7d: '',
  marketCapUSD: '',
});
