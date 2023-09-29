import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { TypographyCardComponent } from './typography-card-coin.component';

interface Coin {
  symbol: string;
  name: string;
  nameId: string;
  rank: number;
  priceUSD: string;
  percentChange24h: string;
  percentChange1h: string;
  percentChange7d: string;
  marketCapUSD: string;
}

interface Props {
  coin: Coin
}

export const CardDataCoinComponent: React.FunctionComponent<Props> = ({
  coin
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {coin.name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {coin.symbol} {coin.nameId}
        </Typography>
        <Typography variant="body1">
          Rank: {coin.rank}
        </Typography>
        <Typography variant="body1">
          Price (USD): {coin.priceUSD}
        </Typography>
        <TypographyCardComponent value={coin.percentChange1h} text={'1h Change:'}/>
        <TypographyCardComponent value={coin.percentChange24h} text={'24h Change:'}/>
        <TypographyCardComponent value={coin.percentChange7d} text={'7d Change:'}/>
        <Typography variant="body1">
          Market Cap (USD): {coin.marketCapUSD}
        </Typography>
      </CardContent>
    </Card>
  );
};
