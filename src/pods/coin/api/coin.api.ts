import { Coin,createEmptyCoin } from './coin.api-model';

//export const getHotelById = async (id: string): Promise<Hotel> => {
export const getCoinById = async (id: string): Promise<Coin> => {
  // const findHotel = mockHotelList.find((el => el.id === id));
  // return !findHotel ? mockHotel : findHotel;
  return createEmptyCoin();
};
