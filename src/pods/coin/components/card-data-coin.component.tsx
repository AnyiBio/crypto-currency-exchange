import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

export const CardDataCoinComponent = ({
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
        <Typography variant="body1">
          24h Change: {percentChange24h}%
        </Typography>
        <Typography variant="body1">
          1h Change: {percentChange1h}%
        </Typography>
        <Typography variant="body1">
          7d Change: {percentChange7d}%
        </Typography>
        <Typography variant="body1">
          Market Cap (USD): {marketCapUSD}
        </Typography>
      </CardContent>
    </Card>
  );
};
