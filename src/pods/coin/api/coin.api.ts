import { Coin, MarketsForCoin , createEmptyCoin, MOCK_MARKET_COIN } from './coin.api-model';

//export const getHotelById = async (id: string): Promise<Hotel> => {
export const getCoinById = async (id: string): Promise<Coin> => {
  // const findHotel = mockHotelList.find((el => el.id === id));
  // return !findHotel ? mockHotel : findHotel;
  const [ emptyCoin ] = createEmptyCoin();
  return emptyCoin;
};

export const getMarketsForCoin = async (id: string): Promise<MarketsForCoin[]> => {
  // const findHotel = mockHotelList.find((el => el.id === id));
  // return !findHotel ? mockHotel : findHotel;
  return MOCK_MARKET_COIN;
};
