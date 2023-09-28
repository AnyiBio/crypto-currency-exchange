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

export interface MarketsForCoin {
  name: string,
  base: string,
  quote: string,
  price: number,
  price_usd: number,
  volume: number,
  volume_usd: number
  time: number
}

  export const createEmptyCoin = (): Coin[] => ([{
    id: "90",
    symbol: "BTC",
    name: "Bitcoin",
    nameid: "bitcoin",
    rank: 1,
    price_usd: "27095.47",
    percent_change_24h: "3.16",
    percent_change_1h: "0.02",
    percent_change_7d: "0.39",
    price_btc: "1.00",
    market_cap_usd: "527574342350.21",
    volume24: 10874548857.532743,
    volume24a: 9211543241.85509,
    csupply: "19470946.00",
    tsupply: "19470946",
    msupply: "21000000"
  }]);

export const MOCK_MARKET_COIN = [
    {
    "name": "BingX",
    "base": "BTC",
    "quote": "USDT",
    "price": 27011.3,
    "price_usd": 27011.3,
    "volume": 68577.4948,
    "volume_usd": 1852367285.2912,
    "time": 1695936254
    },
    {
    "name": "Binance",
    "base": "BTC",
    "quote": "USDT",
    "price": 26978.73,
    "price_usd": 26978.73,
    "volume": 44179.43584,
    "volume_usd": 1191905071.0797,
    "time": 1695936264
    },
    {
    "name": "Coinbase Pro",
    "base": "BTC",
    "quote": "USD",
    "price": 26965.71,
    "price_usd": 26965.71,
    "volume": 18783.67396294,
    "volume_usd": 506515104.81919,
    "time": 1695936141
    },
    {
    "name": "DigiFinex",
    "base": "BTC",
    "quote": "USDT",
    "price": 26981.91,
    "price_usd": 26981.91,
    "volume": 15145.52966,
    "volume_usd": 408655318.18845,
    "time": 1695936015
    },
    {
    "name": "Bitrue",
    "base": "BTC",
    "quote": "USDT",
    "price": 26981.61,
    "price_usd": 26981.61,
    "volume": 14662.6468,
    "volume_usd": 395621817.52535,
    "time": 1695936264
    },
    {
    "name": "Bitmart",
    "base": "BTC",
    "quote": "USDT",
    "price": 26985.44,
    "price_usd": 26985.44,
    "volume": 13861.77732,
    "volume_usd": 374066160.16222,
    "time": 1695936067
    },
    {
    "name": "Bybit",
    "base": "BTC",
    "quote": "USDT",
    "price": 26983.12,
    "price_usd": 26983.12,
    "volume": 12871.375252,
    "volume_usd": 347309862.98975,
    "time": 1695936259
    },
    {
    "name": "OKEX",
    "base": "BTC",
    "quote": "USDT",
    "price": 26940.8,
    "price_usd": 26940.8,
    "volume": 12467.13436222,
    "volume_usd": 335874573.4257,
    "time": 1695936258
    },
    {
    "name": "Indoex",
    "base": "BTC",
    "quote": "USD",
    "price": 27125.62571172344,
    "price_usd": 27125.62571172344,
    "volume": 12281.580602169,
    "volume_usd": 333145558.5628,
    "time": 1695936256
    },
    {
    "name": "MEXC Global",
    "base": "BTC",
    "quote": "USDT",
    "price": 26952.24,
    "price_usd": 26952.24,
    "volume": 9165.114337,
    "volume_usd": 247020361.23826,
    "time": 1695936070
    },
    {
    "name": "LATOKEN",
    "base": "BTC",
    "quote": "USDT",
    "price": 27018.32,
    "price_usd": 27018.32,
    "volume": 8380.0084139682,
    "volume_usd": 226413748.93129,
    "time": 1695936262
    },
    {
    "name": "Bybit",
    "base": "BTC",
    "quote": "USDC",
    "price": 26977.36,
    "price_usd": 26977.36,
    "volume": 8350.022697,
    "volume_usd": 225261568.30514,
    "time": 1695936259
    },
    {
    "name": "Gate",
    "base": "BTC",
    "quote": "USDT",
    "price": 26946,
    "price_usd": 26946,
    "volume": 7904.0678508593,
    "volume_usd": 212983012.30925,
    "time": 1695936138
    },
    {
    "name": "Lbank",
    "base": "BTC",
    "quote": "USDT",
    "price": 26941.46,
    "price_usd": 26941.46,
    "volume": 7412.8315,
    "volume_usd": 199712503.34399,
    "time": 1695936260
    },
    {
    "name": "Indoex",
    "base": "BTC",
    "quote": "EUR",
    "price": 25610.83911826892,
    "price_usd": 26997.42696730996,
    "volume": 7314.6783508301,
    "volume_usd": 197477494.5659,
    "time": 1695936256
    },
    {
    "name": "P2PB2B",
    "base": "BTC",
    "quote": "USD",
    "price": 26978.74,
    "price_usd": 26978.74,
    "volume": 6790.65423,
    "volume_usd": 183203294.90107,
    "time": 1695936255
    },
    {
    "name": "Whitebit",
    "base": "BTC",
    "quote": "USDT",
    "price": 27019.3,
    "price_usd": 27019.3,
    "volume": 6535.145495,
    "volume_usd": 176575056.67305,
    "time": 1695936255
    },
    {
    "name": "Indoex",
    "base": "ETH",
    "quote": "BTC",
    "price": 0.061197431615159,
    "price_usd": 1657.197186040392,
    "volume": 86406.861684659,
    "volume_usd": 143193208.0384,
    "time": 1695936256
    },
    {
    "name": "Indoex",
    "base": "BTC",
    "quote": "USDT",
    "price": 27057.67418990011,
    "price_usd": 27057.67418990011,
    "volume": 5192.0040550897,
    "volume_usd": 140483554.11526,
    "time": 1695936256
    },
    {
    "name": "Binance",
    "base": "BTC",
    "quote": "TUSD",
    "price": 27014.26,
    "price_usd": 27014.26,
    "volume": 5121.20304,
    "volume_usd": 138345510.43535,
    "time": 1695936264
    },
    {
    "name": "Bitget",
    "base": "BTC",
    "quote": "USDT",
    "price": 27019.49,
    "price_usd": 27019.49,
    "volume": 4888.3551,
    "volume_usd": 132080861.7409,
    "time": 1695936259
    },
    {
    "name": "Huobi",
    "base": "BTC",
    "quote": "USDT",
    "price": 27022.25,
    "price_usd": 27022.25,
    "volume": 4757.4068024815,
    "volume_usd": 128555835.96836,
    "time": 1695936152
    },
    {
    "name": "ExtStock",
    "base": "BCH",
    "quote": "BTC",
    "price": 0.02965297,
    "price_usd": 800.252396189852,
    "volume": 158350.00646901,
    "volume_usd": 126719972.1135,
    "time": 1695936259
    },
    {
    "name": "ExtStock",
    "base": "LTC",
    "quote": "BTC",
    "price": 0.00571148,
    "price_usd": 154.13719286096523,
    "volume": 818926.9935853,
    "volume_usd": 126227107.94931,
    "time": 1695936259
    },
    {
    "name": "BTC-Alpha",
    "base": "BTC",
    "quote": "USDT",
    "price": 26929.19,
    "price_usd": 26929.19,
    "volume": 4499.189411,
    "volume_usd": 121159526.49481,
    "time": 1695936253
    },
    {
    "name": "FMFW.io",
    "base": "BTC",
    "quote": "USDT",
    "price": 26980.91,
    "price_usd": 26980.91,
    "volume": 4251.28155,
    "volume_usd": 114703444.88521,
    "time": 1695936014
    },
    {
    "name": "HitBTC",
    "base": "BTC",
    "quote": "USDT",
    "price": 26978.78,
    "price_usd": 26978.78,
    "volume": 4251.28153,
    "volume_usd": 114694389.11593,
    "time": 1695936263
    },
    {
    "name": "Tidex",
    "base": "BTC",
    "quote": "USDT",
    "price": 26944.23,
    "price_usd": 26944.23,
    "volume": 4197.24115679,
    "volume_usd": 113091431.09402,
    "time": 1695936254
    },
    {
    "name": "Coinsbit",
    "base": "BTC",
    "quote": "USDT",
    "price": 27010.37524913,
    "price_usd": 27010.37524913,
    "volume": 4137.62814381,
    "volume_usd": 111758888.80567,
    "time": 1695936255
    },
    {
    "name": "BitForex",
    "base": "ETH",
    "quote": "BTC",
    "price": 0.06123158,
    "price_usd": 1652.592307724292,
    "volume": 58226.9868,
    "volume_usd": 96225470.487644,
    "time": 1695936258
    },
    {
    "name": "Kucoin",
    "base": "BTC",
    "quote": "USDT",
    "price": 26944.3,
    "price_usd": 26944.3,
    "volume": 3196.27472297,
    "volume_usd": 86121385.018121,
    "time": 1695936263
    },
    {
    "name": "YoBit",
    "base": "ETH",
    "quote": "BTC",
    "price": 0.061278,
    "price_usd": 1691.2728393337354,
    "volume": 49102.67391826,
    "volume_usd": 83046018.736614,
    "time": 1695935797
    },
    {
    "name": "Bitstamp",
    "base": "BTC",
    "quote": "USD",
    "price": 26987,
    "price_usd": 26987,
    "volume": 3067.50373293,
    "volume_usd": 82782723.240582,
    "time": 1695936011
    },
    {
    "name": "Kraken",
    "base": "BTC",
    "quote": "USD",
    "price": 26952.6,
    "price_usd": 26952.6,
    "volume": 2480.9662248,
    "volume_usd": 66868490.270544,
    "time": 1695936258
    },
    {
    "name": "Cointiger",
    "base": "BTC",
    "quote": "USDT",
    "price": 26944.2,
    "price_usd": 26944.2,
    "volume": 2241.22785,
    "volume_usd": 60388091.43597,
    "time": 1695936256
    },
    {
    "name": "Indoex",
    "base": "BTC",
    "quote": "USDC",
    "price": 27055.265621601393,
    "price_usd": 27055.265621601393,
    "volume": 2198.9443294828,
    "volume_usd": 59493022.921271,
    "time": 1695936256
    },
    {
    "name": "Poloniex",
    "base": "BTC",
    "quote": "USDT",
    "price": 26946.64,
    "price_usd": 26946.64,
    "volume": 1891.181171,
    "volume_usd": 50960978.189715,
    "time": 1695936261
    },
    {
    "name": "Bitrue",
    "base": "ETH",
    "quote": "BTC",
    "price": 0.061213,
    "price_usd": 1651.62529293,
    "volume": 27405.36,
    "volume_usd": 45263385.737852,
    "time": 1695936264
    },
    {
    "name": "Indoex",
    "base": "ETC",
    "quote": "BTC",
    "price": 0.000584781252747584,
    "price_usd": 15.835596706029401,
    "volume": 2690201.9617331,
    "volume_usd": 42600953.323775,
    "time": 1695936256
    },
    {
    "name": "AscendEX (BitMax)",
    "base": "BTC",
    "quote": "USDT",
    "price": 26948.6,
    "price_usd": 26948.6,
    "volume": 1567.63975,
    "volume_usd": 42245696.56685,
    "time": 1695936261
    },
    {
    "name": "Binance",
    "base": "ETH",
    "quote": "BTC",
    "price": 0.06122,
    "price_usd": 1652.7018542,
    "volume": 22854.0925,
    "volume_usd": 37771001.050808,
    "time": 1695936264
    },
    {
    "name": "Big.One",
    "base": "BTC",
    "quote": "USDT",
    "price": 26941.39,
    "price_usd": 26941.39,
    "volume": 1288.402041,
    "volume_usd": 34711341.863377,
    "time": 1695936257
    },
    {
    "name": "DigiFinex",
    "base": "ETH",
    "quote": "BTC",
    "price": 0.06122,
    "price_usd": 1651.8325302,
    "volume": 20697.1476,
    "volume_usd": 34188221.688031,
    "time": 1695936015
    },
    {
    "name": "bitFlyer",
    "base": "BTC",
    "quote": "JPY",
    "price": 4020536,
    "price_usd": 26924.19390150671,
    "volume": 1248.09882927,
    "volume_usd": 33604054.887509,
    "time": 1695936246
    },
    {
    "name": "Binance",
    "base": "BTC",
    "quote": "BUSD",
    "price": 26985.26,
    "price_usd": 26985.26,
    "volume": 1209.87501,
    "volume_usd": 32648791.712353,
    "time": 1695936264
    },
    {
    "name": "Bitfinex",
    "base": "BTC",
    "quote": "USD",
    "price": 27020,
    "price_usd": 27020,
    "volume": 1077.15800459,
    "volume_usd": 29104809.284022,
    "time": 1695936264
    },
    {
    "name": "Kraken",
    "base": "BTC",
    "quote": "EUR",
    "price": 25499.5,
    "price_usd": 26880.059875189745,
    "volume": 983.17011449,
    "volume_usd": 26427671.544988,
    "time": 1695936258
    },
    {
    "name": "coincheck",
    "base": "BTC",
    "quote": "JPY",
    "price": 4012355,
    "price_usd": 26869.40846237416,
    "volume": 938.24315229,
    "volume_usd": 25210038.495906,
    "time": 1695936243
    },
    {
    "name": "YoBit",
    "base": "ZEC",
    "quote": "BTC",
    "price": 0.00099604,
    "price_usd": 27.490704639348117,
    "volume": 860258.21381458,
    "volume_usd": 23649104.46955,
    "time": 1695935797
    },
    {
    "name": "Indoex",
    "base": "TRX",
    "quote": "BTC",
    "price": 0.000003191363969574,
    "price_usd": 0.08642061031689895,
    "volume": 267839758.91161,
    "volume_usd": 23146875.432272,
    "time": 1695936256
    }
    ]