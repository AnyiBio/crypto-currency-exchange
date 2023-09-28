import React from 'react';
import { ArrowDropDown as ArrowDropDownIcon, ArrowDropUp as ArrowDropUpIcon } from '@mui/icons-material';
import * as classes from './coin-row.styles';

export const PercentageChangeCell: React.FunctionComponent<{ value: string }> = ({ value }) => {
    const isPositive = Math.sign(+value) > 0;
    const className = isPositive ? classes.success : classes.danger;
    const icon = isPositive ? <ArrowDropUpIcon color="success" /> : <ArrowDropDownIcon color="error" />;
  
    return (
      <div className={className}>
        {icon}
        <p>{value} %</p>
      </div>
    );
  };