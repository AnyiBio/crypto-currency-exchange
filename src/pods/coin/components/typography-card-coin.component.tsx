import React from 'react';
import { ArrowDropDown as ArrowDropDownIcon, ArrowDropUp as ArrowDropUpIcon } from '@mui/icons-material';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import * as classes from './coin-card.styles';

interface Props {
  value: string;
  text: string;
}

export const TypographyCardComponent: React.FunctionComponent<Props> = ({
   value, 
   text
  }) => {
  const isPositive = Math.sign(+value) > 0;
  const className = isPositive ? classes.success : classes.danger;
  const icon = isPositive ? <ArrowDropUpIcon color="success" /> : <ArrowDropDownIcon color="error" />;

  return (
    <Box className={classes.typographyCard}>
      <Typography variant="body1">{text}</Typography>
      {icon}
      <Typography variant="body1" className={className}>{value} %</Typography>
    </Box>
  );
};
