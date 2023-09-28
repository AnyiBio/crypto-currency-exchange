import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import * as config from "./bar-chart.config";

export interface MarketsForCoin {
  name: string,
  base: string,
  quote: string,
  price: number,
  priceUSD: number,
  volume: number,
  volumeUSD: number
  time: number
}

interface Config {
  id: number,
  title: string,
  backgroundColor: string,
  coinValue: string
}

interface BarChartProps {
  data: MarketsForCoin[];
  configuration: Config;
}

Chart.register(CategoryScale);
export const BarChart: React.FC<BarChartProps> = ({ data, configuration }) => {

  const label = data.length ? data[0].base : '';
  const coinNames = data.map((coin) => coin.name);
  const coinValues = data.map((coin) => coin[configuration.coinValue]);

  const chartData = {
    labels: coinNames,
    datasets: [
      {
        label: label,
        data: coinValues,
        backgroundColor: configuration.backgroundColor,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div style={config.chartContainerStyle}>
      <h2>{configuration.title}</h2>
      <Bar data={chartData} options={config.chartOptions} />
    </div>
  );
};