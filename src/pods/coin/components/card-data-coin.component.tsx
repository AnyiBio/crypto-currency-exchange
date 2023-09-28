import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { TypographyCardComponent } from './typography-card-coin.component';

interface Props {
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

export const CardDataCoinComponent: React.FunctionComponent<Props> = ({
  symbol,
  name,
  nameId,
  rank,
  priceUSD,
  percentChange24h,
  percentChange1h,
  percentChange7d,
  marketCapUSD,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {symbol} ({nameId})
        </Typography>
        <Typography variant="body1">
          Rank: {rank}
        </Typography>
        <Typography variant="body1">
          Price (USD): {priceUSD}
        </Typography>
        <TypographyCardComponent value={percentChange1h} text={'1h Change:'}/>
        <TypographyCardComponent value={percentChange24h} text={'24h Change:'}/>
        <TypographyCardComponent value={percentChange7d} text={'7d Change:'}/>
        <Typography variant="body1">
          Market Cap (USD): {marketCapUSD}
        </Typography>
      </CardContent>
    </Card>
  );
};
